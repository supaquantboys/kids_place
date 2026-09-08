"""Run in a Python environment with kokoro==0.9.4, soundfile and espeak-ng.
Generate reusable speech locally; no API key or cloud speech requests.
"""
import hashlib,json,pathlib,platform,subprocess
import numpy as np
import soundfile as sf

# The macOS espeakng-loader wheel can retain its CI build-time data path. Prefer
# the system installation when Homebrew provides one.
if platform.system() == 'Darwin':
 import espeakng_loader
 prefix=subprocess.run(
  ['brew','--prefix','espeak-ng'],capture_output=True,text=True,check=False
 ).stdout.strip()
 library=pathlib.Path(prefix)/'lib/libespeak-ng.dylib'
 data=pathlib.Path(prefix)/'share/espeak-ng-data'
 if library.exists() and data.exists():
  espeakng_loader.get_library_path=lambda: str(library)
  espeakng_loader.get_data_path=lambda: str(data)

from kokoro import KPipeline
root=pathlib.Path(__file__).resolve().parents[1]
c=json.loads((root/'content/catalog.json').read_text())
texts=set()
for w in c['words']:
 texts.update(x for x in [w['canonical'],w.get('example'),*w.get('variants',{}).values()] if x)
for s in c['stories']:
 for v in s['versions']:
  for p in v['pages']:texts.update(p['sentences'])
import re
texts.update(re.sub(r'\bgray\b','grey',re.sub(r'\bcolor\b','colour',t)) for t in list(texts))
out=root/'assets/narration';out.mkdir(parents=True,exist_ok=True)
manifest_path=out/'manifest.json'
manifest=json.loads(manifest_path.read_text()) if manifest_path.exists() else {}
pipeline=KPipeline(lang_code='a',repo_id='hexgrad/Kokoro-82M')
voice='af_heart';speed=.9
for i,text in enumerate(sorted(texts)):
 identity=hashlib.sha256(json.dumps(['Kokoro-82M-v1.0',voice,speed,text]).encode()).hexdigest()
 dest=out/f'{identity}.mp3'
 if not dest.exists():
  chunks=[audio for _,_,audio in pipeline(text,voice=voice,speed=speed)]
  if not chunks:raise RuntimeError('No audio generated')
  wav=out/f'{identity}.wav';sf.write(wav,np.concatenate(chunks),24000)
  subprocess.run(['ffmpeg','-v','error','-y','-i',str(wav),'-b:a','64k',str(dest)],check=True)
  wav.unlink()
 manifest[text]={'path':f'assets/narration/{identity}.mp3','voice':voice,'model':'hexgrad/Kokoro-82M','reviewStatus':'unreviewed'}
 temporary=out/'manifest.tmp';temporary.write_text(json.dumps(manifest,indent=2));temporary.replace(manifest_path)
 print(f'{i+1}/{len(texts)} saved',flush=True)
