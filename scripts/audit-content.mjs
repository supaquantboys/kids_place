import {readFile,access} from 'node:fs/promises';
import {resolve,sep} from 'node:path';
const c=JSON.parse(await readFile('content/catalog.json','utf8'));
const review=JSON.parse(await readFile('content/release-review.json','utf8'));
const versions=c.stories.flatMap(s=>s.versions),pages=versions.flatMap(v=>v.pages);
async function present(path){
 if(typeof path!=='string'||!path)return false;
 const root=resolve('.'),file=resolve(path);if(!file.startsWith(root+sep))return false;
 try{await access(file);return true;}catch{return false;}
}
let missingWordRecordings=0,missingPageRecordings=0,missingPhonicsRecordings=0,approvedWordPictures=0;
for(const w of c.words){
 if(!await present(w.audio.normal)||!await present(w.audio.slow)||w.audio.status!=='approved')missingWordRecordings++;
 if(w.imageStatus==='approved'&&await present(w.image))approvedWordPictures++;
}
for(const p of pages)if(!await present(p.audio)||p.audioReviewStatus!=='approved')missingPageRecordings++;
for(const p of c.phonics)if(!await present(p.audio)||p.reviewStatus!=='approved')missingPhonicsRecordings++;
const blockers=[];
const require=(condition,message)=>{if(!condition)blockers.push(message);};
const authored=c.questions.filter(q=>q.authorship==='manually-authored');
const approved=authored.filter(q=>q.reviewStatus==='approved');
const missingWordExamples=c.words.filter(w=>!w.example).length;
const missingWordMetadata=c.words.filter(w=>!w.partOfSpeech||!Array.isArray(w.prerequisites)||!Array.isArray(w.irregularParts)||!w.contentVersion).length;
require(c.regions.length===6&&c.chapters.length===24,'24 chapters across six regions');
require(new Set(c.words.map(w=>w.canonical.toLowerCase())).size>=600,'600 distinct written word entries');
require(c.stories.length===48&&versions.length===144,'48 stories with three support versions');
require(c.missions.length>=96,'96 mission routes');
require(approved.length>=960&&c.stories.every(s=>approved.filter(q=>q.storyId===s.id).length>=20),'960 reviewed, individually authored questions, at least 20 per story');
require(!missingWordRecordings,'Reviewed normal and slow word recordings');
require(!missingPageRecordings,'Reviewed recordings for all story pages');
require(!missingPhonicsRecordings,'Reviewed phonics recordings');
require(!missingWordExamples,'An example sentence for every vocabulary entry');
require(!missingWordMetadata,'Part of speech, prerequisites, irregular parts, and content version on every word');
require(approvedWordPictures===c.words.length,'Reviewed meaning-specific vocabulary pictures');
require(c.words.every(w=>w.reviewStatus==='approved'),'Vocabulary editorial approval');
require(c.stories.every(s=>s.reviewStatus==='approved')&&pages.every(p=>p.reviewStatus==='approved'&&p.artReviewStatus==='approved'),'Story language and page illustration review');
for(const [name,check]of Object.entries(review.checks)){
 const evidence=check.evidence.length>0&&(await Promise.all(check.evidence.map(present))).every(Boolean);
 require(check.status==='passed'&&evidence,`Acceptance review: ${name}`);
}
const report={status:c.releaseStatus,chapters:c.chapters.length,words:c.words.length,stories:c.stories.length,versions:versions.length,pages:pages.length,missionRoutes:c.missions.length,draftQuizItems:c.questions.length,individuallyAuthoredQuizItems:authored.length,approvedQuizItems:approved.length,missingWordRecordings,missingPageRecordings,missingPhonicsRecordings,missingWordExamples,missingWordMetadata,approvedWordPictures,distinctIllustrations:new Set(pages.map(p=>p.art)).size,releaseReady:blockers.length===0,blockers};
console.log(JSON.stringify(report,null,2));
if(process.argv.includes('--release')&&blockers.length){console.error('Release audit failed. See the concrete unmet requirements above.');process.exitCode=1;}
