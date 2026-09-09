import test from 'node:test';
import assert from 'node:assert/strict';
import {access,readFile} from 'node:fs/promises';

const root=new URL('../',import.meta.url);
const catalog=JSON.parse(await readFile(new URL('content/catalog.json',root)));
const manifest=JSON.parse(await readFile(new URL('assets/narration/manifest.json',root)));
const localized=text=>text.replace(/\bcolor\b/g,'colour').replace(/\bgray\b/g,'grey');
const choices=(prompt,options)=>[prompt,...options,...options.map(option=>`Or ${option.replace(/[.!?]+$/,'')}?`)];

test('every chapter audio path resolves to a saved recording',async()=>{
 const expected=new Set();
 for(const word of catalog.words){
  const written=[word.canonical,...Object.values(word.variants||{})];
  for(const text of written)expected.add(text);
  if(word.example)expected.add(word.example);
  for(const text of written)expected.add(`Find the ${text}.`);
 }
 for(const chapter of catalog.chapters)expected.add(`Let’s explore ${chapter.title}. Tap Continue Adventure to begin.`);
 for(const story of catalog.stories)for(const version of story.versions)for(const page of version.pages)for(const sentence of page.sentences)expected.add(sentence);
 for(const story of catalog.bedtimeStories)for(const sentence of story.sentences)expected.add(sentence);
 for(const question of catalog.questions)for(const text of choices(question.prompt,question.options))expected.add(text);
 for(const item of catalog.phonics.filter(item=>item.rhyme))for(const text of choices(`Which word rhymes with ${item.word}?`,[item.rhyme,item.distractor]))expected.add(text);
 for(const text of [...expected])expected.add(localized(text));
 const missing=[...expected].filter(text=>!manifest[text]);
 assert.deepEqual(missing,[],`${missing.length} playable texts lack recordings`);
 await Promise.all([...expected].map(text=>access(new URL(manifest[text].path,root))));
});
