import test from 'node:test';
import assert from 'node:assert/strict';
import {readdir,readFile,access} from 'node:fs/promises';

const root='assets/story-sentences';
const pngSize=async path=>{const b=await readFile(path);assert.equal(b.readUInt32BE(0),0x89504e47,'PNG signature');assert.equal(b.readUInt32BE(16),1448,`${path} width`);assert.equal(b.readUInt32BE(20),1086,`${path} height`);};

test('sentence illustration assets use the required 4:3 project dimensions',async()=>{
 const stories=await readdir(root,{withFileTypes:true});
 let total=0;
 for(const story of stories.filter(e=>e.isDirectory())){
  const files=(await readdir(`${root}/${story.name}`)).filter(f=>f.endsWith('.png'));
  for(const file of files){await pngSize(`${root}/${story.name}/${file}`);total++;}
 }
 assert.ok(total>=180,`expected at least the published illustration checkpoint, found ${total}`);
});

test('Story Time source includes sentence-level artwork and an image fallback',async()=>{
 const source=await readFile('src/app.mjs','utf8');
 assert.match(source,/function sentenceArt\(/);
 assert.match(source,/data-fallback/);
 assert.match(source,/class="sentence-card"/);
});
