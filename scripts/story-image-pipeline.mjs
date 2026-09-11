import {mkdir,readdir} from 'node:fs/promises';
import {basename,dirname,join,relative} from 'node:path';
import sharp from 'sharp';

export const STORY_IMAGE_WIDTHS=[480,1200];
export const STORY_IMAGE_QUALITY=84;

export function storyVariantName(source,width){
 return basename(source,'.png')+`-${width}.webp`;
}

export async function renderStoryVariant(source,width,output){
 const image=sharp(source,{limitInputPixels:30_000_000}).rotate().resize({width,withoutEnlargement:true,kernel:'lanczos3'}).webp({quality:STORY_IMAGE_QUALITY,effort:5,smartSubsample:true});
 if(output){await mkdir(dirname(output),{recursive:true});return image.toFile(output);}
 return image.toBuffer();
}

async function pngFiles(root){
 const found=[];
 for(const entry of await readdir(root,{withFileTypes:true})){
  const path=join(root,entry.name);
  if(entry.isDirectory())found.push(...await pngFiles(path));
  else if(entry.isFile()&&entry.name.endsWith('.png'))found.push(path);
 }
 return found;
}

export async function buildStoryImages(sourceRoot,outputRoot,{workers=4}={}){
 const files=await pngFiles(sourceRoot);
 let next=0,bytes=0;
 async function worker(){
  while(next<files.length){
   const source=files[next++],folder=dirname(relative(sourceRoot,source));
   const metadata=await sharp(source).metadata();
   if(metadata.width!==1448||metadata.height!==1086)throw Error(`${source} must be 1448x1086`);
   for(const width of STORY_IMAGE_WIDTHS){
    const output=join(outputRoot,folder,storyVariantName(source,width));
    const info=await renderStoryVariant(source,width,output);bytes+=info.size;
   }
  }
 }
 await Promise.all(Array.from({length:Math.min(workers,files.length)},worker));
 return {sources:files.length,variants:files.length*STORY_IMAGE_WIDTHS.length,bytes};
}
