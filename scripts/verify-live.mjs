import assert from 'node:assert/strict';
const base=process.env.SITE_URL;
assert(base && process.env.GITHUB_SHA, 'Deployment URL and expected SHA required');
async function get(path){
 const r=await fetch(new URL(path,base),{signal:AbortSignal.timeout(15000)});
 assert.equal(r.status,200,path);return r;
}
let verified=false;
for(let attempt=0;attempt<12;attempt++){
 try{
  const info=await (await get('build-info.json?sha='+process.env.GITHUB_SHA)).json();
  assert.equal(info.sha,process.env.GITHUB_SHA);
  assert.equal(info.channel,'preview');
  const html=await (await get('')).text();assert(html.includes('paint-theme.css'));
  for(const path of ['app.css','paint-theme.css','src/app.mjs','src/audio.mjs','src/progress.mjs','src/review.mjs','assets/world.webp','assets/beaver.webp','assets/treehouse.webp','assets/painted-paper.webp']) assert((await (await get(path)).arrayBuffer()).byteLength>0,path);
  for(const path of ['assets/story-sentences/ch01-a/p01-s01-480.webp','assets/story-sentences/ch01-a/p01-s01-1200.webp']){
   const response=await get(path),bytes=(await response.arrayBuffer()).byteLength;
   assert.match(response.headers.get('content-type')||'',/image\/webp/);assert(bytes>10_000&&bytes<750_000,`${path} optimized size`);
  }
  const c=await (await get('content/catalog.json')).json();
  assert.equal(c.chapters.length,24);assert(c.words.length>=600);assert.equal(c.stories.length,48);assert(c.questions.length>=960);
  console.log(JSON.stringify({url:base,sha:info.sha,channel:info.channel,chapters:c.chapters.length,words:c.words.length,stories:c.stories.length,questions:c.questions.length,assets:'all verified HTTP 200'}));
  verified=true;break;
 }catch(error){console.log('Waiting for deployed version:',error.message);if(attempt<11)await new Promise(r=>setTimeout(r,10000));}
}
assert(verified,'Live deployment did not match expected build');
