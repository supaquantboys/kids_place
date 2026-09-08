import test from 'node:test';
import assert from 'node:assert/strict';
import {Narrator} from '../src/audio.mjs';
test('saved audio waits for completion and navigation cancels remaining sentences',async()=>{
 const old=globalThis.Audio;const clips=[];
 globalThis.Audio=class{constructor(src){this.src=src;clips.push(this);}play(){return Promise.resolve();}pause(){this.stopped=true;}};
 try{const n=new Narrator();n.recordings={One:{path:`assets/narration/${'a'.repeat(64)}.mp3`},Two:{path:`assets/narration/${'b'.repeat(64)}.mp3`}};const marked=[];const pending=n.speak(['One','Two'],{narration:true,slow:true},i=>marked.push(i));assert.equal(clips.length,1);assert.equal(clips[0].playbackRate,.8);assert.deepEqual(marked,[0]);n.stop();assert.equal(await pending,false);assert.equal(clips.length,1);assert.equal(clips[0].stopped,true);}finally{globalThis.Audio=old;}
});
