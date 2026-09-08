import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {scripts} from '../content/story-scripts.mjs';
import {glossGroups,pictograms,coreExamples,phonics} from '../content/word-support.mjs';
import {beaverQuestions} from '../content/beaver-questions.mjs';
import {authoredQuestions} from '../content/authored-questions.mjs';
import {additionalExamples} from '../content/word-examples.mjs';
const spec = await readFile('docs/Kids_Place_Game_Concept.md','utf8');
const appendix = spec.split('## Appendix A')[1].split('## Appendix B')[0];
const rows = appendix.split('\n').filter(x=>/^\| (?:\d{2} —|[1-6] \|)/.test(x));
if(rows.length!==30) throw Error(`Expected 30 inventory rows, found ${rows.length}`);
const regions=['Home Harbor','Everyday Grove','Wild Trails','Discovery Valley','Friendship Town','Skybound Isles'];
const regionIcons=['🏡','🌷','🌲','🌤️','🏘️','🏝️'];
const extras={water:'水',box:'盒子',bridge:'橋',grass:'草',leaf:'葉子',flag:'旗子',card:'卡片',map:'地圖',feather:'羽毛',shell:'殼',wide:'寬的',webbed:'有蹼的',creek:'小溪',animal:'動物',six:'六',eight:'八'};
const words=[];const chapters=[];
rows.forEach((line,g)=>{
 const cells=line.split('|');const entries=cells[2].split(',').map(x=>x.trim()); const zh=glossGroups[g].split('|');
 if(entries.length!==20||zh.length!==20) throw Error(`Inventory alignment ${g}: ${entries.length}/${zh.length}`);
 if(g<24) chapters.push({id:`ch${String(g+1).padStart(2,'0')}`,number:g+1,title:cells[1].trim().replace(/^\d+ — /,''),region:Math.floor(g/4),wordIds:entries.map(x=>x.toLowerCase()),sharedWordIds:[],storyIds:[],missionIds:[],icon:regionIcons[Math.floor(g/4)]});
 entries.forEach((word,i)=>words.push({id:word.toLowerCase(),canonical:word,variants:word==='color'?{'en-CA':'colour','en-US':'color'}:word==='gray'?{'en-CA':'grey','en-US':'gray'}:{},zh:zh[i],sense:zh[i],chapterId:g<24?chapters[g].id:null,icon:pictograms[word.toLowerCase()]||null,example:g>=24?coreExamples[(g-24)*20+i]:null,phonics:phonics.find(p=>p.word===word)||null,skills:['listening','reading','speaking'],audio:{normal:null,slow:null,status:'missing-recording'},imageStatus:pictograms[word.toLowerCase()]?'symbol-only':'missing',reviewStatus:'draft',relatedStoryIds:[]}));
});
for(const [word,zh] of Object.entries(extras)) if(!words.some(w=>w.id===word)) words.push({id:word,canonical:word,variants:{},zh,sense:zh,chapterId:null,icon:pictograms[word]||null,example:null,phonics:null,skills:['listening','reading','speaking'],audio:{normal:null,slow:null,status:'missing-recording'},imageStatus:'missing',reviewStatus:'draft',relatedStoryIds:[]});
const wordMap=Object.fromEntries(words.map(w=>[w.id,w]));
const tiers=['sprout','trail','ranger'];const stories=[];const questions=[];const missions=[];
const hasWord=(s,w)=>new RegExp(`\\b${w}\\b`,'i').test(s);
const sourceMap={14:['smithsonian-beaver','maine-beaver'],15:['smithsonian-beaver','maine-beaver'],16:['squirrel-review-pending'],17:['owl-review-pending'],18:['snail-review-pending'],19:['sdz-bee','sdz-spider'],20:['sdz-giraffe'],21:['sdz-zebra'],22:['noaa-seal'],23:['crab-review-pending'],24:['chicken-review-pending'],25:['sheep-review-pending']};
scripts.forEach(([title,focus,triples],i)=>{
 const chapter=chapters[Math.floor(i/2)]; const id=`${chapter.id}-${i%2?'b':'a'}`;
 const story={id,chapterId:chapter.id,title,focusWordIds:focus.split(' ').filter(w=>wordMap[w]),genre:sourceMap[i]?'animal-observation':'adventure',sourceIds:sourceMap[i]||[],reviewStatus:'draft',illustration:i===14||i===15?'assets/beaver.webp':'assets/treehouse.webp',illustrationScope:i===14||i===15?'chapter-scene':'shared-reading-nook',versions:[]};
 tiers.forEach((tier,t)=>{
  const versionId=`${id}-${tier}-v1`;
  const pages=triples.map((parts,p)=>({id:`${versionId}-p${p+1}`,text:parts.slice(0,t+1).join(' '),sentences:parts.slice(0,t+1),art:story.illustration,audio:null,reviewStatus:'draft'}));
  const version={id:versionId,tier,pages,readAloud:true,independentlyDecodable:false,questionIds:[]};
  story.versions.push(version);
 });
 if(i!==14&&authoredQuestions[id]?.length!==20)throw Error(`Expected 20 authored questions for ${id}`);
 if(i===14) beaverQuestions.forEach(([tier,p,prompt,answer,wrong,target],n)=>{
  const v=story.versions[tiers.indexOf(tier)];const q={id:`${id}-authored-${n+1}`,storyId:id,storyVersionId:v.id,evidencePageIds:[v.pages[p].id],targetWordIds:[target].filter(w=>wordMap[w]&&hasWord(v.pages[p].text,w)),prerequisites:[],skill:'comprehension',kind:'detail',prompt,answer,options:[answer,wrong],feedback:`Let’s listen to page ${p+1}. ${v.pages[p].text}`,authorship:'manually-authored',reviewStatus:'draft'};questions.push(q);v.questionIds.push(q.id);
 });
 if(authoredQuestions[id]) authoredQuestions[id].forEach(({tier,prompt,answer,wrong,target,page},n)=>{
  const v=story.versions[tier],p=v.pages[page];
  if(!p)throw Error(`Invalid authored evidence: ${id}/${tier}/${page}`);
  const q={id:`${id}-authored-${n+1}`,storyId:id,storyVersionId:v.id,evidencePageIds:[p.id],targetWordIds:wordMap[target]&&hasWord(p.text,target)?[target]:[],prerequisites:[],skill:'comprehension',kind:/^(Why|How has|What helped)/.test(prompt)?'inference':'detail',prompt,answer,options:[answer,wrong],feedback:`Let’s read page ${page+1} again. ${p.text}`,authorship:'manually-authored',reviewStatus:'draft'};
  questions.push(q);v.questionIds.push(q.id);
 });
 for(const word of words){
  const page=story.versions[2].pages.find(p=>hasWord(p.text,word.id));
  if(page){word.relatedStoryIds.push(id);if(!word.example)word.example=page.sentences.find(s=>hasWord(s,word.id));}
 }
 stories.push(story);chapter.storyIds.push(id);
});
chapters.forEach((c,i)=>{
 c.sharedWordIds=words.filter(w=>!w.chapterId).slice(i*5,i*5+5).map(w=>w.id);
 ['story-a','story-b','field','practice'].forEach((route,r)=>{
  const storyId=c.storyIds[r===1?1:0];const story=stories.find(s=>s.id===storyId);
  const m={id:`${c.id}-${route}`,chapterId:c.id,title:r<2?story.title:r===2?'Explorer field notes':'Build the parade page',storyId,steps:r<2?['safari','story','quiz']:r===2?['listening','detective','speaking']:['phonics','spelling','sentence'],reward:`${c.id}-${route}-sticker`,support:'any'}; missions.push(m);c.missionIds.push(m.id);
 });
});
for(const word of words) if(!word.example) word.example=additionalExamples[word.id]||null;
// Never fabricate reviewed images or sound metadata for incomplete entries.
const registry={schemaVersion:1,contentVersion:'2026.09-alpha.2',releaseStatus:'editorial-and-audio-review-required',regions:regions.map((name,id)=>({id,name,icon:regionIcons[id]})),chapters,words,stories,questions,missions,phonics};
await mkdir('content',{recursive:true});await writeFile('content/catalog.json',JSON.stringify(registry,null,2)+'\n');
console.log(JSON.stringify({words:words.length,chapters:chapters.length,stories:stories.length,versions:stories.length*3,missions:missions.length,questions:questions.length,manuallyAuthoredQuestions:questions.filter(q=>q.authorship==='manually-authored').length}));
