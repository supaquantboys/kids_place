import { mkdir, cp, rm } from 'node:fs/promises';
await rm('dist', {recursive:true,force:true});
await mkdir('dist', {recursive:true});
for (const path of ['index.html','app.css','src','content','assets']) await cp(path, `dist/${path}`, {recursive:true});
console.log('Static build complete. Relative asset paths support /kids_place/ on GitHub Pages.');
