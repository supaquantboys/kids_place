import {readFile} from 'node:fs/promises';
// Public preview explicitly requested by the owner on 2026-09-08.
// Full MVP certification continues to use audit-content.mjs --release.
const app=await readFile('src/app.mjs','utf8');
if(!app.includes('Preview')) throw new Error('Preview label must remain visible');
await import('./audit-content.mjs');
console.log('Publishing a labeled preview; outstanding release reviews remain open in issue #1.');
