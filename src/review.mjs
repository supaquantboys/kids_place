import {dueReviews} from './progress.mjs';
// Select a real assessment for the due skill. Exposure-only Safari is never a review result.
export function planReview(profile,catalog,now=Date.now()){
 for(const due of dueReviews(profile,now)){
  const word=catalog.words.find(w=>w.id===due.target);
  const story=catalog.stories.find(s=>s.versions.some(v=>v.id===due.target));
  let mode,itemId,tier=profile.settings.tier,chapterId=word?.chapterId||profile.lastChapter,storyId;
  if(word){
   if(due.skill==='listening'&&word.icon)mode='listening';
   else if(due.skill==='speaking')mode='speaking';
   else if(due.skill==='spelling'&&catalog.phonics.some(p=>p.word===word.id&&p.parts.every(g=>g.length===1)&&p.word.length<=3))mode='spelling';
   else if(due.skill==='phonics'&&catalog.phonics.some(p=>p.word===word.id&&p.rhyme))mode='phonics';
   itemId=word.id;
   const alternate=word.relatedStoryIds.find(id=>id!==due.lastContext)||word.relatedStoryIds[0];
   if(alternate){storyId=alternate;chapterId=catalog.stories.find(s=>s.id===alternate).chapterId;}
  }else if(story){
   if(due.skill==='comprehension')mode='quiz';
   if(due.skill==='reading')mode='sentence';
   storyId=story.id;chapterId=story.chapterId;tier=story.versions.find(v=>v.id===due.target).tier;
  }
  if(mode)return {mode,itemId,chapterId,storyId:storyId||catalog.chapters.find(c=>c.id===chapterId).storyIds[0],tier};
 }
 return null;
}
