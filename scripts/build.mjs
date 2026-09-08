import { mkdir, cp, rm, writeFile } from 'node:fs/promises';
await import('./compile-content.mjs');
await rm('dist', {recursive:true,force:true});
await mkdir('dist', {recursive:true});
for (const path of ['index.html','app.css','paint-theme.css','src']) await cp(path, `dist/${path}`, {recursive:true});
await mkdir('dist/content');
await cp('content/catalog.json','dist/content/catalog.json');
await mkdir('dist/assets');
for(const name of ['world','beaver','treehouse','painted-paper']) await cp(`assets/${name}.webp`,`dist/assets/${name}.webp`);
console.log('Static build complete. Relative asset paths support /kids_place/ on GitHub Pages.');

await writeFile('dist/build-info.json', JSON.stringify({sha:process.env.GITHUB_SHA || 'local',channel:'preview'}));

try{await cp('assets/narration','dist/assets/narration',{recursive:true});}catch(e){if(e.code!=='ENOENT')throw e;}
