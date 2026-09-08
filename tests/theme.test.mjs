import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';
const css=await readFile('paint-theme.css','utf8');
function luminance(hex){const c=hex.replace('#','').match(/../g).map(v=>parseInt(v,16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4);return c[0]*.2126+c[1]*.7152+c[2]*.0722;}
function contrast(a,b){const values=[luminance(a),luminance(b)].sort((a,b)=>b-a);return(values[0]+.05)/(values[1]+.05);}
test('paint theme loads after base styles and all its local images exist',async()=>{const html=await readFile('index.html','utf8');assert.ok(html.indexOf('paint-theme.css')>html.indexOf('app.css'));for(const match of css.matchAll(/url\('([^']+)'\)/g))await access(match[1]);});
test('painted cards keep readable dark text on all six color surfaces',()=>{for(const background of ['#d9f0ff','#ffe0d3','#fff0b4','#e9dffd','#dcefd0','#ffe1ed']){assert.ok(css.includes(background));assert.ok(contrast('#293f47',background)>=4.5);assert.ok(contrast('#485966',background)>=4.5);}});
test('main buttons and letter tiles meet normal-text contrast',()=>{for(const[foreground,background]of [['#ffffff','#176451'],['#604318','#ffe396'],['#285268','#e1f4ff'],['#4d3718','#ffdb69'],['#63421b','#ffd67a'],['#234c5a','#aee4ef'],['#672f2a','#f8b9b0']])assert.ok(contrast(foreground,background)>=4.5,`${foreground} on ${background}`);});
test('theme preserves reduced motion, explicit focus and 56px controls',()=>{assert.match(css,/prefers-reduced-motion:reduce/);assert.match(css,/:focus-visible/);assert.match(css,/min-width: 56px; min-height: 56px/);assert.match(css,/\.story-paging[^}]*flex-wrap: wrap/s);});
