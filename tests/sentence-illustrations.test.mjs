import test from 'node:test';
import assert from 'node:assert/strict';
import {runInNewContext} from 'node:vm';
import {scripts} from '../content/story-scripts.mjs';
import {readdir,readFile,access} from 'node:fs/promises';

const root='assets/story-sentences';
test('every tier maps each sentence to its matching story, page and image slot',async()=>{
 const catalog=JSON.parse(await readFile('content/catalog.json','utf8'));
 const source=await readFile('src/app.mjs','utf8');
 const sentenceArt=runInNewContext(source.split('\n').find(l=>l.startsWith('function sentenceArt('))+';sentenceArt');
 let checked=0;
 for(const [index,story] of catalog.stories.entries()){
  assert.equal(story.title,scripts[index][0]);
  for(const [tier,version] of story.versions.entries())for(const [pageIndex,page] of version.pages.entries()){
   assert.deepEqual(page.sentences,scripts[index][2][pageIndex].slice(0,tier+1));
   for(const [sentenceIndex] of page.sentences.entries()){
    const expected=`${root}/${story.id}/p${String(pageIndex+1).padStart(2,'0')}-s${String(sentenceIndex+1).padStart(2,'0')}.png`;
    assert.equal(sentenceArt(story,pageIndex,sentenceIndex,page.art),expected);
    await access(expected);checked++;
   }
  }
 }
 assert.equal(checked,1728);
});
const pngSize=async path=>{const b=await readFile(path);assert.equal(b.readUInt32BE(0),0x89504e47,'PNG signature');assert.equal(b.readUInt32BE(16),1448,`${path} width`);assert.equal(b.readUInt32BE(20),1086,`${path} height`);};

test('sentence illustration assets use the required 4:3 project dimensions',async()=>{
 const stories=await readdir(root,{withFileTypes:true});
 assert.equal(stories.filter(e=>e.isDirectory()).length,48);
 let total=0;
 for(const story of stories.filter(e=>e.isDirectory())){
  const files=(await readdir(`${root}/${story.name}`)).filter(f=>f.endsWith('.png'));
  assert.equal(files.length,18,`${story.name} has exactly 18 sentence images`);
  for(const file of files){await pngSize(`${root}/${story.name}/${file}`);total++;}
 }
 assert.equal(total,864);
});

test('Story Time source includes sentence-level artwork and an image fallback',async()=>{
 const source=await readFile('src/app.mjs','utf8');
 assert.match(source,/function sentenceArt\(/);
 assert.match(source,/data-fallback/);
 assert.match(source,/fallbackTried/);
 assert.match(source,/id="story-sentence-art"/);
 assert.match(source,/showStorySentence/);
 assert.match(source,/data-sentence0/);
});
