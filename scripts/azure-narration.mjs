import {readFile,writeFile,mkdir,stat} from 'node:fs/promises';
import {createHash} from 'node:crypto';
const c=JSON.parse(await readFile('content/catalog.json','utf8'));
const voice='en-US-JennyNeural',format='audio-24khz-48kbitrate-mono-mp3';
const xml=s=>s.replace(/[<>&"']/g,c=>({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&apos;'}[c]));
const texts=new Set([...c.words.flatMap(w=>[w.canonical,w.example,...Object.values(w.variants||{})]),...c.stories.flatMap(s=>s.versions.flatMap(v=>v.pages.flatMap(p=>p.sentences)))].filter(Boolean));
for(const text of [...texts])texts.add(text.replace(/\bcolor\b/g,'colour').replace(/\bgray\b/g,'grey'));
const jobs=[...texts].map(text=>{const body=`<speak version="1.0" xml:lang="en-US"><voice name="${voice}"><prosody rate="-10%">${xml(text)}</prosody></voice></speak>`;return {text,body,id:createHash('sha256').update(format+body).digest('hex')};});
console.log(JSON.stringify({clips:jobs.length,textCharacters:[...texts].join('').length,voice,mode:process.argv.includes('--generate')?'generate':'plan'}));
if(!process.argv.includes('--generate'))process.exit(0);
const key=process.env.AZURE_SPEECH_KEY,region=process.env.AZURE_SPEECH_REGION;
if(!key||!region||!/^[a-z0-9]+$/.test(region))throw Error('Configure AZURE_SPEECH_KEY and AZURE_SPEECH_REGION securely first.');
await mkdir('assets/narration',{recursive:true});
let manifest={};try{manifest=JSON.parse(await readFile('assets/narration/manifest.json','utf8'));}catch{}
for(const j of jobs){
 const path=`assets/narration/${j.id}.mp3`;
 let cached=false;try{cached=(await stat(path)).size>0;}catch{}
 if(!cached){
  const r=await fetch(`https://${region}.tts.speech.microsoft.com/cognitiveservices/v1`,{method:'POST',headers:{'Ocp-Apim-Subscription-Key':key,'Content-Type':'application/ssml+xml','X-Microsoft-OutputFormat':format,'User-Agent':'WonderwoodNarration'},body:j.body,signal:AbortSignal.timeout(60000)});
  if(!r.ok)throw Error(`Azure returned HTTP ${r.status}; saved clips retained. Retry later to resume.`);
  const bytes=Buffer.from(await r.arrayBuffer());if(bytes.length<100)throw Error('Empty audio response');
  await writeFile(path,bytes);
  await new Promise(r=>setTimeout(r,3100));
 }
 manifest[j.text]={path,voice,reviewStatus:'unreviewed'};
 await writeFile('assets/narration/manifest.json',JSON.stringify(manifest,null,2));
}
