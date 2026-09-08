import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {newProfile} from '../src/progress.mjs';
import {planReview} from '../src/review.mjs';
const c=JSON.parse(await readFile('content/catalog.json','utf8'));
function due(target,skill){const p=newProfile();p.progress[`${target}:${skill}`]={nextReview:0,lastContext:'ch08-a'};return p;}
test('due listening starts a listening assessment for the exact word',()=>{const plan=planReview(due('cat','listening'),c);assert.equal(plan.mode,'listening');assert.equal(plan.itemId,'cat');});
test('due spelling cannot silently become a listening success',()=>{assert.equal(planReview(due('cat','spelling'),c).mode,'spelling');assert.equal(planReview(due('beaver','spelling'),c),null);});
test('comprehension review preserves the exact version despite changed parent setting',()=>{const p=due('ch08-a-ranger-v1','comprehension');p.settings.tier='sprout';const plan=planReview(p,c);assert.equal(plan.mode,'quiz');assert.equal(plan.tier,'ranger');assert.equal(plan.storyId,'ch08-a');});
test('not-yet-due targets do not create a review',()=>{const p=due('cat','listening');p.progress['cat:listening'].nextReview=500;assert.equal(planReview(p,c,499),null);});
