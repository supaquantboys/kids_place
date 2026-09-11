import { mkdir, cp, copyFile, readFile, rm, writeFile } from 'node:fs/promises';
import {buildStoryImages} from './story-image-pipeline.mjs';
await import('./compile-content.mjs');
await rm('dist', {recursive:true,force:true});
await mkdir('dist', {recursive:true});
for (const path of ['index.html','app.css','paint-theme.css','src']) await cp(path, `dist/${path}`, {recursive:true});
await mkdir('dist/content');
await cp('content/catalog.json','dist/content/catalog.json');
await mkdir('dist/assets');
for(const name of ['world','beaver','treehouse','painted-paper']) await cp(`assets/${name}.webp`,`dist/assets/${name}.webp`);
const storyImages=await buildStoryImages('assets/story-sentences','dist/assets/story-sentences');
console.log(`Optimized ${storyImages.sources} story illustrations into ${storyImages.variants} responsive WebP files (${(storyImages.bytes/1048576).toFixed(1)} MB).`);
console.log('Static build complete. Relative asset paths support /kids_place/ on GitHub Pages.');

await writeFile('dist/build-info.json', JSON.stringify({sha:process.env.GITHUB_SHA || 'local',channel:'preview'}));

if(process.env.WONDERWOOD_SKIP_NARRATION!=='1')try{
 const manifestPath='assets/narration/manifest.json',manifest=JSON.parse(await readFile(manifestPath,'utf8'));
 const recordings=[...new Set(Object.values(manifest).map(item=>item?.path).filter(path=>/^assets\/narration\/[a-f0-9]{64}\.mp3$/.test(path)))];
 await mkdir('dist/assets/narration',{recursive:true});
 await copyFile(manifestPath,'dist/assets/narration/manifest.json');
 let next=0;
 await Promise.all(Array.from({length:16},async()=>{while(next<recordings.length){const path=recordings[next++];await copyFile(path,`dist/${path}`);}}));
 console.log(`Copied ${recordings.length} manifest-backed narration files.`);
}catch(e){if(e.code!=='ENOENT')throw e;}
