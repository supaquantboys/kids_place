# Content review ledger

Status on 2026-09-08: authoring and source checks are in progress. No story, recording, vocabulary picture, or question bank has final editorial approval. The specification remains unchanged. `content/release-review.json` records outstanding acceptance areas; the release audit also checks actual content and asset metadata.

## Counting

The 600-entry specification inventory contains 480 thematic entries and 120 shared entries. Twelve extra written entries used by stories bring the current catalog to 612. Canadian/US spelling variants do not add to the count. All 612 now have an example sentence and Traditional Chinese support. Part-of-speech, irregular-part and prerequisite review is incomplete.

Forty-eight original scripts have six pages each, with cumulative Sprout, Trail and Ranger support versions: 144 versions and 864 pages. They are read-aloud drafts, not independently decodable passages. Their final narration durations have not been checked and current text is shorter than the duration targets, especially at Ranger level.

Each chapter has four three-step routes, for 96 routes. The field/practice routes use shared structures and still need chapter-specific variety. All 960 question records are now individually authored: 20 per story, distributed as 6 Sprout, 7 Trail and 7 Ranger items. The mechanically derived cloze/page-recall fallback was removed. The bank has detail, comparison, sequence-reasoning and inference prompts, but richer picture/listening/sort interaction types still need implementation and review. “Individually authored” describes question-specific authoring rather than generation by a template, not human editorial approval.

## Factual checks

Selected source checks below were made during development, including a fresh check on 2026-09-08. They do not constitute a complete review of every sentence or picture.

| Story | Checked claims | Evidence | Remaining |
| --- | --- | --- | --- |
| Bea and the Floating Stick | Broad flat tail, fur, webbed rear feet; dams slow water; lodges are homes | [Smithsonian beaver fact sheet](https://nationalzoo.si.edu/animals/beaver), [Maine wildlife account](https://www.maine.gov/ifw/fish-wildlife/wildlife/species-information/mammals/beaver.html) | Final illustration/audio and wording review |
| A Door Under the Water | Underwater lodge entrances and living chamber above the water; lodge/dam distinction | Same Smithsonian and Maine accounts | An accurate page-specific cross-section is missing |
| Six Legs at the Flower Gate | Bees are insects that collect flower food and move pollen; insects have six legs, spiders eight; spiders are arachnids | [San Diego Zoo bee](https://animals.sandiegozoo.org/animals/bee), [San Diego Zoo spider](https://animals.sandiegozoo.org/animals/spider) | Precise six/eight-leg illustrations and all quiz wording |
| The Postcard With Flippers | Harbor seals use coastal habitats and haul out to rest | [NOAA harbor seal](https://www.fisheries.noaa.gov/species/harbor-seal) | Final anatomy illustration and complete sentence-level check |

Giraffe, zebra, snail, squirrel and owl sources were consulted during drafting, but the catalog keeps review-pending markers where a complete fact-to-page ledger has not been finished. Crab, chicken, sheep, new vocabulary examples, and non-animal science statements still need complete source/wording review. Do not convert those markers into approval by default.

Anthropomorphic club guides are fictional. Wildlife-observation stories keep visitors at a distance, distinguish observation from inference, and do not invite children to feed or handle wild animals. Bea's creek illustration is storybook art, not an anatomical or lodge cross-section diagram.

## Artwork and narration

Three original generated illustrations are committed as WebP assets: the adventure world, Beaver Creek and the treehouse reading nook. Direction: warm cream, forest green, sky blue and coral, soft paper texture, friendly expressive guides, and no embedded UI text. Original concept previews informed the design; clean production scenes avoid treating mock UI text as app controls.

The current scene art is reused. Vocabulary uses a limited symbol/emoji set and many entries lack a meaningful picture. These are explicitly not approved vocabulary illustrations. Only two distinct scenes currently appear on story pages.

No production audio-generation capability is connected in this session. No reviewed word, phonics, story or instruction recordings have been produced. Local browser speech is an optional development fallback; it never earns the “approved recording” label. Complete recordings, final-script comparison, natural slow versions, consistent voice direction and listening/device checks remain necessary.
