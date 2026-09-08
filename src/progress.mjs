export const SCHEMA=1;
export const SKILLS=['listening','reading','spelling','speaking','comprehension','phonics'];
const DAY=86400000;
export const uid=()=>globalThis.crypto?.randomUUID?.() || `p-${Date.now()}-${Math.random().toString(36).slice(2)}`;
export function newProfile(name='Explorer') {return {id:uid(),name:name.trim().slice(0,32)||'Explorer',settings:{tier:'sprout',locale:'en-CA',chinese:true,narration:true,slow:false,microphone:false,sessionMinutes:8},introduced:{},attempts:[],progress:{},bookmarks:{},heardPages:{},missions:{},rewards:[],decoration:'leaves',lastChapter:'ch01',createdAt:Date.now()};}
export function newState(){const p=newProfile();return {schemaVersion:SCHEMA,activeId:p.id,profiles:[p]};}
export function introduce(profile,wordId,now=Date.now()){profile.introduced[wordId]??=now;}
export function recordAttempt(profile,{target,skill,correct,session,context,item,hinted=false,retry=false,now=Date.now()}) {
 if(!SKILLS.includes(skill)||!target||!session||!context||!item) throw Error('Invalid attempt');
 const event={target,skill,correct:!!correct,session,context,item,hinted:!!hinted,retry:!!retry,time:now};
 const repeated=profile.attempts.some(a=>a.session===session&&a.item===item&&a.skill===skill);
 event.independent=!!correct&&!hinted&&!retry&&!repeated&&skill!=='speaking';
 profile.attempts.push(event); if(profile.attempts.length>20000)profile.attempts.shift();
 const key=`${target}:${skill}`;const prev=profile.progress[key];
 const relevant=profile.attempts.filter(a=>a.target===target&&a.skill===skill);
 const independent=relevant.filter(a=>a.independent);
 const sessions=new Set(independent.map(a=>a.session));const contexts=new Set(independent.map(a=>a.context));
 let state='practicing';
 if(independent.length>=3&&sessions.size>=2&&contexts.size>=2) state='growing';
 const delayed=event.independent&&prev?.state==='growing'&&now-prev.lastIndependent>=7*DAY&&context!==prev.lastContext;
 if(delayed||(prev?.state==='remembered'&&correct)) state='remembered';
 const misses=relevant.filter(a=>a.session===session&&!a.correct&&!a.hinted).length;
 if(!correct&&misses>=2)state='practicing';
 const stage=correct&&event.independent?Math.min((prev?.reviewStage??0)+1,5):correct?(prev?.reviewStage??0):0;
 profile.progress[key]={state,independent:independent.length,supported:relevant.filter(a=>a.correct&&!a.independent).length,attempts:relevant.length,misses,reviewStage:stage,nextReview:now+[1,1,3,7,14,30][stage]*DAY,lastIndependent:event.independent?now:(prev?.lastIndependent??0),lastContext:event.independent?context:(prev?.lastContext??''),lastTime:now};
 return event;
}
export function dueReviews(profile,now=Date.now()){return Object.entries(profile.progress).filter(([,p])=>p.nextReview<=now).sort((a,b)=>a[1].nextReview-b[1].nextReview).map(([key,p])=>({target:key.split(':')[0],skill:key.split(':')[1],...p}));}
export function completeMission(profile,missionId){if(!profile.rewards.includes(missionId))profile.rewards.push(missionId);profile.missions[missionId]={step:3,completedAt:Date.now()};}
const safeKey=x=>typeof x==='string'&&/^[a-zA-Z0-9_.:-]{1,160}$/.test(x)&&!['__proto__','constructor','prototype'].includes(x);
function safeMap(input,check){if(!input||typeof input!=='object'||Array.isArray(input)||Object.keys(input).length>30000)throw Error('Invalid map');const out={};for(const[k,v]of Object.entries(input)){if(!safeKey(k)||!check(v))throw Error('Invalid saved value');out[k]=v;}return out;}
export function validateImport(input){
 if(!input||input.schemaVersion!==SCHEMA||!Array.isArray(input.profiles)||input.profiles.length<1||input.profiles.length>10)throw Error('This is not a supported Wonderwood backup.');
 const ids=new Set();const profiles=input.profiles.map(raw=>{
  if(!raw||!safeKey(raw.id)||ids.has(raw.id)||typeof raw.name!=='string'||raw.name.length>32)throw Error('Invalid learner profile.');ids.add(raw.id);
  const p=newProfile(raw.name);p.id=raw.id;
  const s=raw.settings||{};p.settings={...p.settings,tier:['sprout','trail','ranger'].includes(s.tier)?s.tier:'sprout',locale:s.locale==='en-US'?'en-US':'en-CA',chinese:s.chinese!==false,narration:s.narration!==false,slow:s.slow===true,microphone:false,sessionMinutes:[5,8,12,20].includes(s.sessionMinutes)?s.sessionMinutes:8};
  p.introduced=safeMap(raw.introduced||{},v=>Number.isFinite(v)&&v>=0);
  if(!Array.isArray(raw.attempts)||raw.attempts.length>20000)throw Error('Invalid attempt history.');
  p.attempts=[];p.progress={};
  for(const a of raw.attempts){if(!safeKey(a.target)||!safeKey(a.session)||!safeKey(a.context)||!safeKey(a.item)||!SKILLS.includes(a.skill)||!Number.isFinite(a.time)||a.time<0||typeof a.correct!=='boolean')throw Error('Invalid attempt.');recordAttempt(p,{...a,now:a.time});}
  p.bookmarks=safeMap(raw.bookmarks||{},v=>Number.isInteger(v)&&v>=0&&v<10);
  p.heardPages=safeMap(raw.heardPages||{},v=>Number.isFinite(v)&&v>=0);
  p.missions=safeMap(raw.missions||{},v=>v&&Number.isInteger(v.step)&&v.step>=0&&v.step<=3);
  if(!Array.isArray(raw.rewards)||raw.rewards.length>100||raw.rewards.some(x=>!safeKey(x)))throw Error('Invalid rewards.');p.rewards=[...new Set(raw.rewards)];
  p.decoration=['leaves','stars','flowers','shells'].includes(raw.decoration)?raw.decoration:'leaves';p.lastChapter=/^ch(0[1-9]|1\d|2[0-4])$/.test(raw.lastChapter)?raw.lastChapter:'ch01';return p;
 });
 if(!ids.has(input.activeId))throw Error('Active learner is missing.');return {schemaVersion:SCHEMA,activeId:input.activeId,profiles};
}
export function exportState(state){return JSON.stringify({...state,exportedAt:new Date().toISOString()},null,2);}
export function readStorage(storage){try{const raw=storage.getItem('wonderwood-v1');if(!raw)return {state:newState(),error:null};const parsed=JSON.parse(raw);const checked=validateImport(parsed); // Local microphone preference is only retained on this device.
 for(const p of checked.profiles)p.settings.microphone=parsed.profiles.find(r=>r.id===p.id)?.settings?.microphone===true;
 return {state:checked,error:null};}catch{return {state:newState(),error:'Saved progress could not be read. Your original save has not been changed. Export a recovery copy or import a backup in Parents.'};}}
export function saveStorage(storage,state){try{storage.setItem('wonderwood-v1',exportState(state));return null;}catch{return 'This browser could not save progress. Keep this tab open and export a backup in Parents.';}}
