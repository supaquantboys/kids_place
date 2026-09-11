import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import {renderStoryVariant} from './story-image-pipeline.mjs';
const root = resolve('.');
const types = {'.html':'text/html', '.js':'text/javascript', '.mjs':'text/javascript', '.css':'text/css', '.json':'application/json', '.png':'image/png', '.webp':'image/webp', '.mp3':'audio/mpeg'};
createServer(async (req,res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url,'http://localhost').pathname);
    const variant=pathname.match(/^\/assets\/story-sentences\/(ch\d{2}-[ab])\/(p\d{2}-s\d{2})-(480|1200)\.webp$/);
    if(variant){
      const source=resolve(root,`assets/story-sentences/${variant[1]}/${variant[2]}.png`);
      const data=await renderStoryVariant(source,Number(variant[3]));
      res.writeHead(200,{'Content-Type':'image/webp','Cache-Control':'private, max-age=3600'});res.end(data);return;
    }
    let path = resolve(root, '.' + pathname);
    if (path !== root && !path.startsWith(root + sep)) throw new Error('Path');
    if ((await stat(path)).isDirectory()) path = resolve(path, 'index.html');
    const data = await readFile(path);
    res.writeHead(200, {'Content-Type': types[extname(path)] || 'application/octet-stream', 'Cache-Control':'no-cache'}); res.end(data);
  } catch { res.writeHead(404); res.end('Not found'); }
}).listen(Number(process.env.PORT || 4173), '127.0.0.1');
