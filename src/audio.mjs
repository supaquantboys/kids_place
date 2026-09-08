// Browser synthesis is a clearly labeled preview fallback, not a reviewed production recording.
export class Narrator {
 constructor(onStatus=()=>{}){this.onStatus=onStatus;this.generation=0;this.pending=null;this.paused=false;}
 stop(){if(this.clip){this.clip.pause();this.clip=null;}this.generation++;globalThis.speechSynthesis?.cancel();this.pending?.(false);this.pending=null;this.paused=false;this.onStatus('idle');}
 pause(){if(this.clip){this.paused=!this.paused;this.paused?this.clip.pause():this.clip.play().catch(()=>this.stop());this.onStatus(this.paused?'paused':'speaking');return;}if(!globalThis.speechSynthesis)return;this.paused=!this.paused;this.paused?speechSynthesis.pause():speechSynthesis.resume();this.onStatus(this.paused?'paused':'speaking');}
 wait(milliseconds,generation){if(!milliseconds)return Promise.resolve(true);return new Promise(resolve=>{let timer;const finish=ok=>{clearTimeout(timer);if(this.pending===cancel)this.pending=null;resolve(ok&&generation===this.generation);};const cancel=()=>finish(false);timer=setTimeout(()=>finish(true),milliseconds);this.pending=cancel;});}
 async speak(sentences,settings,onSentence=()=>{},pauseMs=0){
  this.stop();if(!settings.narration){this.onStatus('Narration is off. Read together or turn it on in Parents.');return false;}
  const saved=sentences.map(s=>this.recordings?.[s]?.path);
  if(saved.length&&saved.every(path=>/^assets\/narration\/[a-f0-9]{64}\.mp3$/.test(path))&&globalThis.Audio){
   const generation=this.generation;this.onStatus('speaking');
   for(let i=0;i<saved.length;i++){
    if(generation!==this.generation)return false;
    const clip=new Audio(saved[i]);this.clip=clip;clip.playbackRate=settings.slow?0.8:1;clip.preservesPitch=true;
    const ok=await new Promise(resolve=>{this.pending=resolve;onSentence(i);clip.onended=()=>resolve(true);clip.onerror=()=>resolve(false);clip.play().catch(()=>resolve(false));});
    if(generation!==this.generation)return false;
    this.pending=null;this.clip=null;
    if(!ok){this.onStatus('Recording could not play. Tap Listen to retry or read together.');return false;}
    if(pauseMs&&i<saved.length-1&&!await this.wait(pauseMs,generation))return false;
   }
   this.onStatus('idle');return true;
  }
  if(!globalThis.speechSynthesis||!globalThis.SpeechSynthesisUtterance){this.onStatus('This browser has no voice. You can read together and keep playing.');return false;}
  const generation=this.generation;
  let voices=speechSynthesis.getVoices();
  if(!voices.length){await new Promise(resolve=>setTimeout(resolve,200));voices=speechSynthesis.getVoices();}
  if(generation!==this.generation)return false;
  const voice=voices.find(v=>v.localService&&v.lang===settings.locale)||voices.find(v=>v.localService&&/^en-(US|CA)/i.test(v.lang))||voices.find(v=>v.localService&&/^en/i.test(v.lang));
  if(!voice){this.onStatus('No local English voice was found. Read together, or install a device English voice. No text was sent to a remote voice service.');return false;}
  this.onStatus('speaking');
  for(let i=0;i<sentences.length;i++){
   if(generation!==this.generation)return false;
   const ok=await new Promise(resolve=>{const utterance=new SpeechSynthesisUtterance(sentences[i]);utterance.voice=voice;utterance.lang=voice.lang;utterance.rate=settings.slow?0.72:0.9;this.pending=resolve;onSentence(i);utterance.onend=()=>{if(this.pending===resolve)this.pending=null;resolve(true);};utterance.onerror=()=>{if(this.pending===resolve)this.pending=null;resolve(false);};speechSynthesis.speak(utterance);});
   if(!ok||generation!==this.generation){if(generation===this.generation)this.onStatus('The voice stopped. Tap Listen to try again, or read together.');return false;}
   if(pauseMs&&i<sentences.length-1&&!await this.wait(pauseMs,generation))return false;
  }this.onStatus('idle');return true;
 }
}
export class LocalRecorder {
 constructor(onStatus=()=>{}){this.onStatus=onStatus;this.generation=0;this.url=null;this.stream=null;this.recorder=null;this.timer=null;}
 async start(enabled){
  if(!enabled){this.onStatus('A grown-up can enable local recording in Parents. You can practice without it.');return;}
  this.clear();const generation=this.generation;
  if(!navigator.mediaDevices?.getUserMedia||!globalThis.MediaRecorder){this.onStatus('Recording is unavailable here. Listen and say it with a grown-up instead.');return;}
  try{const stream=await navigator.mediaDevices.getUserMedia({audio:true});if(generation!==this.generation){stream.getTracks().forEach(t=>t.stop());return;}
   this.stream=stream;const chunks=[];const r=new MediaRecorder(stream);this.recorder=r;
   r.ondataavailable=e=>{if(e.data.size)chunks.push(e.data);};
   r.onstop=()=>{stream.getTracks().forEach(t=>t.stop());if(generation===this.generation){clearTimeout(this.timer);if(chunks.length){this.url=URL.createObjectURL(new Blob(chunks,{type:r.mimeType}));this.onStatus('ready');}}};
   r.onerror=()=>{if(generation===this.generation){this.clear();this.onStatus('Recording stopped. You can try again or keep playing.');}};r.start();this.onStatus('recording');this.timer=setTimeout(()=>this.stop(),30000);
  }catch{if(generation===this.generation){this.clear();this.onStatus('The microphone is unavailable or permission was declined. You can still practice and finish.');}}
 }
 stop(){if(this.recorder?.state==='recording')this.recorder.stop();this.stream?.getTracks().forEach(t=>t.stop());clearTimeout(this.timer);}
 clear(){this.generation++;this.stop();if(this.url)URL.revokeObjectURL(this.url);this.url=null;this.stream=null;this.recorder=null;}
}
