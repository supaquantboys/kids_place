# Kids Place — The Wonderwood Explorer Club

**Version:** 2.0 — expanded MVP and multi-year product plan  
**Status:** design specification; this revision updates the Markdown first. No game implementation or deployment is included in this revision.  
**Date:** 2026-09-07  
**Repository:** https://github.com/supaquantboys/kids_place

## 1. The experience we are building

A living storybook adventure for a child beginning English at five, with room to grow through early elementary learning over the next two to three years. She becomes a member of the Wonderwood Explorer Club, travels between connected regions, helps memorable characters, and fills an illustrated Explorer Journal with words, discoveries, and stories.

The club is preparing a great Story Parade. Each community contributes a page to the Wonderwood Atlas. A chapter might involve finding a missing picnic basket, observing a beaver's flat tail, preparing a classroom, or helping an inventor test a floating boat. Progress changes the world: a garden blooms, a reading nook gains books, a station opens, or an animal observation page fills in.

The main promise is **learn words, understand stories, and use English to do things**. The game should feel like a place she returns to, with characters she knows, rather than a collection of disconnected tests.

### What changes from version 1

| Area | Earlier proposal | Expanded direction |
| --- | --- | --- |
| First complete release | 3 worlds and about 30 words | 24 playable chapters and a 600-entry vocabulary seed bank |
| Stories | One activity type | A full narrated Story Time library, integrated into every chapter |
| Learning runway | Beginner recognition and spelling | Beginner oral English through Grade 1-oriented skills, with Grade 2/3 expansion paths |
| Replay | Mixed questions | Three story support levels, spaced review, alternate missions, and deeper return visits |
| Content | Small pilot-led collection | 48 original stories, 96 mission routes, and a structured content pipeline |
| Adventure | Stickers and a treehouse | Connected regions, recurring characters, habitat journals, creative construction, and a season finale |

Defaults carried forward: clear North American English audio, optional Traditional Chinese assistance, a bilingual parent area, gentle play, and excellent phone/tablet/laptop layouts. The small internal pilot is still useful for development, but is not the finished MVP promised here.

## 2. What “Grade 1 vocabulary” means for this product

North America is not one curriculum jurisdiction. The reference frameworks below describe vocabulary use, phonics, comprehension, speaking, and writing competencies; they do not provide a single mandatory vocabulary count for every first grader. We therefore use **600 distinct written word entries as a product content target**, not as proof of Grade 1 proficiency or a ceiling on a native-speaking child's vocabulary.

The design uses British Columbia Grade 1 English Language Arts and US Common Core Grade 1 standards as reference points. It supports learning toward those competencies; it is not a certified curriculum or a substitute for all classroom instruction. [BC Grade 1 ELA](https://curriculum.gov.bc.ca/curriculum/english-language-arts/1/core), [Common Core Grade 1 language](https://www.thecorestandards.org/ELA-Literacy/L/1/)

| Skill strand | MVP learning outcome | Game evidence | Reference |
| --- | --- | --- | --- |
| Oral vocabulary | Understand and use familiar nouns, verbs, descriptors, and relational words | Listen-and-select; describe an animal; complete a spoken sentence | BC ELA 1; CCSS L.1.4–6 |
| Sound awareness | Hear rhymes, syllables, and individual sounds; blend and segment simple words | Sound Garden with audio-only and sound-to-letter tasks | CCSS RF.1.2 |
| Decoding | Progress through consonants, short vowels, blends/digraphs, final-e, common vowel teams, endings, and selected two-syllable patterns | Pattern-specific reading activities with known prerequisites | CCSS RF.1.3 |
| Word learning in context | Use a sentence, picture, and known word parts to clarify meaning | Story clues, category sorting, simple word-family activities | CCSS L.1.4–5 |
| Story comprehension | Identify characters, setting, and events; answer detail questions and retell | Page-grounded quizzes and picture sequencing | CCSS RL.1.1–3 |
| Reading practice | Read suitable familiar text with increasing accuracy and expression | Replay, supported rereading, optional recorded reading | CCSS RF.1.4 |
| Expression | Build simple descriptions and explain a choice | Sentence Workshop, retelling, and optional parent conversation | BC ELA 1 |

The scope does not claim comprehensive handwriting instruction, standardized assessment, or human evaluation of oral fluency. Independent reading and spelling develop on their own tracks; a child can understand a narrated word such as “elephant” long before decoding or spelling it.

References: [Foundational reading, Grade 1](https://www.thecorestandards.org/ELA-Literacy/RF/1/), [Literature, Grade 1](https://www.thecorestandards.org/ELA-Literacy/RL/1/).

## 3. Release scope and multi-year runway

This is a **feature-focused, content-rich MVP**: reusable game systems with enough finished material to sustain varied play. Content quality, illustration, and narration are first-class deliverables.

| Release stage | Cumulative chapters | Cumulative word entries | Original stories | Purpose |
| --- | ---: | ---: | ---: | --- |
| Internal playable slice | 2 | 50 | 4 | Prove navigation, audio, story quizzes, and progress before producing the full catalog |
| MVP release | 24 | At least 600 | 48 | Broad beginner-to-Grade 1-oriented learning coverage |
| Expedition expansion | 36 | About 1,000 | 72 | Longer stories, useful school language, more reading and sentence construction |
| Growing Reader expansion | 48 | About 1,500 | 96 | Grade 2/3-oriented extensions, richer explanations, comparison, and creative retelling |

The internal slice's 50 entries are drawn from the 600-entry bank; later columns are cumulative, not additions. Expansion numbers are planning targets, not completed content. The two-to-three-year runway depends on continued content releases and the learner's pace; the initial 600 words alone are not a guaranteed multi-year curriculum.

### MVP content contract

- 24 chapters, grouped into six regions of four chapters each.
- 20 first-introduced thematic entries per chapter: 480 distinct entries total.
- 120 shared sentence-building and common-word entries: 600 total after exact-form deduplication.
- 48 original stories: two per chapter. Each has three authored support versions, producing 144 story versions, not 144 different stories.
- Four primary mission routes per chapter: two story missions and two field/practice missions; 96 routes total.
- A minimum 20 authored quiz items per story, spread across skill levels; 960 story-linked items total. A session presents only a small subset, normally 4–6.
- Eight reusable game modes, a story library, an Explorer Journal, adaptive review, creative rewards, and a parent dashboard.
- At least 12 of the 48 stories specifically explore real animal appearance, movement, food, habitat, or behavior; their factual statements require sources before release.
- Complete reviewed audio and illustrations for all shipped learning content. The launcher must not count placeholders as playable chapters.

## 4. Adventure world and chapter map

The club travels between six regions. A region finale combines familiar words from its four chapters and adds a page to the Atlas. Chapter numbers are catalog IDs, not a requirement to teach every word in exactly that order. The scheduler can introduce a prerequisite word earlier and credit its existing entry.

All story titles and hooks below are original proposals. Animal stories require species-specific fact checking before production; this table is a content plan, not a claim that all scripts are authored.

| Ch. | Region / chapter | Story A | Story B | Adventure task and language focus |
| --- | --- | --- | --- | --- |
| 01 | Home Harbor — Welcome to Wonderwood | The Envelope With No Name | A Seat for Every Friend | Deliver club invitations; names, greetings, family |
| 02 | Home Harbor — The Mirror Meadow | The Silly Shadow | Where Is My Footprint? | Rebuild a moving shadow; body parts and describing |
| 03 | Home Harbor — Rainbow Repair Shop | The Rainbow's Missing Stripe | A House Made of Shapes | Restore a mural; colors and shapes |
| 04 | Home Harbor — Counting Carnival | Twenty Tickets for the Train | The Lantern Count | Prepare a fair; numbers and quantities |
| 05 | Everyday Grove — The Treehouse Move | A Bed Beneath the Stars | The Key in the Quiet Room | Furnish the club's treehouse; home and furniture |
| 06 | Everyday Grove — Picnic Orchard | The Rolling Apple | A Picnic for Everyone | Pack a picnic; food words and requests |
| 07 | Everyday Grove — Pet Care Club | A Soft Bed for Pip | The Puppy Who Needed a Rest | Care for a fictional pet with an adult; needs and gentle actions |
| 08 | Everyday Grove — Beaver Creek Builders | Bea and the Floating Stick | A Door Under the Water | Observe a beaver and distinguish its dam from its home |
| 09 | Wild Trails — Forest Footprint Trail | The Missing Nut Map | Who Passed the Reading Tree? | Follow illustrated clues; appearance and forest habitats |
| 10 | Wild Trails — Tiny Garden Giants | The Smallest Garden Guest | Six Legs at the Flower Gate | Look closely at small animals; features and classification |
| 11 | Wild Trails — Wildlife Passport | The Long-Neck Lookout | A Stripe for the Field Guide | Visit separate habitats in the Atlas; compare animals |
| 12 | Wild Trails — Ocean Rescue Post | The Postcard With Flippers | A Shell Beside the Tide | Match marine observations to postcards; parts and movement |
| 13 | Discovery Valley — Sunrise Farm | A Morning in the Barn | The Woolly Weather Report | Help a farmer organize a day; farm animals and materials |
| 14 | Discovery Valley — The Dress-Up Express | The Mitten on the Train | A Coat for the Cloudy Day | Pack suitable clothing; clothing and choices |
| 15 | Discovery Valley — Weather Watch Station | The Cloud That Changed the Plan | Rain on Parade Day | Update an outdoor plan; weather and descriptions |
| 16 | Discovery Valley — Adventure School | The Backpack Mix-Up | A Book for the New Student | Prepare a classroom; objects and everyday instructions |
| 17 | Friendship Town — Playground Motion Mission | The Ball Beyond the Bridge | A Path of Hops and Steps | Complete a cooperative movement course; action verbs |
| 18 | Friendship Town — The Friendship Festival | A Quiet Place for Nori | The Game With One More Player | Help characters express feelings, take turns, and invite friends |
| 19 | Friendship Town — Town Explorer | The Library Bus | A Helmet for the Journey | Follow a safe fictional route with a grown-up; places and transport |
| 20 | Friendship Town — Little Market Kitchen | Soup for the Story Club | The Basket With Three Clues | Follow a simple shopping/cooking story; objects and requests |
| 21 | Skybound Isles — The Lost Treasure Map | The Box Behind the Clock | Left at the Reading Rock | Follow location clues; position and opposites |
| 22 | Skybound Isles — The Clockwork Camp | The Upside-Down Morning | Tomorrow's Lantern Walk | Put a routine in order; time and sequence |
| 23 | Skybound Isles — Inventor Island | The Boat That Would Not Float | A Bridge for a Tiny Wagon | Compare materials in a virtual experiment; properties and prediction |
| 24 | Skybound Isles — The Great Story Parade | The Song With a Missing Beat | The Atlas Comes Alive | Combine words and retell favorite discoveries; creative finale |

Animal scenes should respect actual habitats. Chapter 11 is a passport to different places, not a scene putting pandas, tigers, and giraffes into one shared natural habitat. Fictional club characters may talk; an observation card separately identifies the real animal facts.

## 5. A game she can grow into

Three learning tracks are available inside familiar chapters. They are readiness bands, not age labels displayed to the child. A short, optional “Meet Your Buddy” activity proposes a starting point; parents may override it. A new English learner always has a genuine zero-reading entry path.

| Track | Narration / text | Activity support | Typical task |
| --- | --- | --- | --- |
| Sprout Explorer | Pictures and short spoken phrases; no required reading | Two large choices, demonstrations, familiar repeated prompts | Hear “tail” and tap the pictured tail |
| Trail Explorer | Short sentences; optional synchronized text | Three/four choices, selected missing letters, simple sequencing | “The tail is flat”; choose the matching picture |
| Story Ranger | Longer narrated/readable passages | Fewer hints, contextual meaning, word patterns, comparisons, retelling | Explain how two animals' body parts differ using story evidence |

Each word has separate progress for listening/meaning, reading, spelling, and speaking practice. Story comprehension has its own record. Success in listening does not automatically unlock advanced spelling. Speaking completion never blocks map access.

### Phonics scope

A parallel Sound Trail supplies structured prerequisites rather than deriving difficulty from the chapter number:

1. Hear matching/different sounds, rhyme, syllables, and initial sounds without printed letters.
2. Match uppercase/lowercase forms; learn letter names separately from letter sounds.
3. Blend and segment simple words with consonants and short vowels; begin suitable CVC words.
4. Introduce common consonant digraphs and blends with explicitly tagged examples.
5. Introduce final-e and selected common vowel teams; compare short and long vowels.
6. Practice common endings and selected regular two-syllable patterns; teach irregular parts of common words explicitly.

Use reviewed sound recordings. Do not pronounce every consonant with an added vowel. A story can contain words beyond a child's decoding level if it is clearly a read-aloud. “Read It Myself” passages must be checked against taught sound patterns and explicitly taught irregular words; they are not assumed decodable because the sentences are short.

## 6. Eight connected game modes

| Mode | Play mechanic | Progression | Example |
| --- | --- | --- | --- |
| Word Safari | Tap interactive objects to hear names and short descriptions | Object → descriptor → category/use | Touch the beaver's tail |
| Listening Quest | Act on a spoken instruction without written answer clues | Word → phrase → one/two-step directions | Put the stick beside the pond |
| Sound Garden | Audio sorting, syllable beats, sound/letter links, blending | Oral sounds → sound patterns → decoding | Blend the sounds in “cat” |
| Word Builder | Tap letter tiles or select a missing sound pattern | Copy → missing letter → independent spelling | Build “mud” after hearing it |
| Talk to Buddy | Hear, repeat, optionally record, replay, or retell | Word → description → short retelling | “The tail is flat” |
| Story Time | Narrated illustrated pages with optional read-along | Sprout → Trail → Ranger versions | Bea and the Floating Stick |
| Sentence Workshop | Arrange meaningful picture/word tiles, later compose | Phrase → sentence → linked explanation | “The beaver can swim” |
| Nature Detective | Compare evidence, sort features, and solve a small mystery | Direct observation → comparison → supported inference | Match the animal to the tail shown in the story |

These are shared systems, not eight separately engineered games per chapter. Mini-variations change the purpose and scene: packing a bag, delivering a letter, repairing a sign, collecting observation notes, or arranging a parade. Variation should change useful language practice, not merely move the same answer button.

The default home screen has “Continue Adventure,” “Story Time,” and “My Treehouse.” An Explore view gives access to chapters and modes. Avoid displaying eight equally prominent choices at first launch.

## 7. Story Time — core product feature

Story Time is available directly from the home screen and within a chapter. The child can enjoy a story without completing a quiz; assessed activities are presented as optional “Help the Story” missions. Stories pause and resume at the last page.

### Story structure

Each story uses a simple arc: invitation, discovery, small problem, helpful action, satisfying resolution. Animal stories weave appearance and habits into that arc. A distinct “Real Animal Notebook” panel separates reviewed facts from pretend dialogue and character names.

| Element | Authoring rule |
| --- | --- |
| Pages | Usually 6–10 illustrated pages with one clear focal action each |
| Duration | Sprout about 1–2 minutes; Trail about 2–3; Ranger about 3–5, excluding interactions; verify against final recordings |
| Learning targets | Normally 4–6 focus words per episode; roughly 2–3 may be new in a beginner session, with remaining targets reviewed |
| Rich language | Additional story words can appear with pictures/audio help; incidental exposure does not count as learned vocabulary |
| Audio | Play/pause, replay current sentence, page navigation, optional slower recordings, no overlapping narration |
| Text | Sentence highlighting in MVP; word highlighting only with real timing metadata, not a guessed timer |
| Comprehension | Ask about details actually present in that specific story version |
| Review | Later revisit the same word in a different story, scene, or picture |
| Versions | Three deliberately edited versions sharing characters and core events; simplification must not invent or remove facts needed by that version's questions |

### Story-to-quiz rules

Every story question stores its exact story ID, version/tier, target word or skill, evidence page IDs, correct answer, distractors, feedback, and prerequisites. A question about an omitted advanced paragraph must never appear after the beginner version.

- Start with a meaning or listening question, then a story detail, then a suitable sequence, spelling, or sentence activity.
- For pure listening items, hide written target words and do not display a replay transcript that gives away the answer; accessible support remains available but records the item as supported.
- If a quiz introduces a new instruction word, demonstrate it first. Distractor vocabulary must also be familiar or pictured clearly.
- Give a concrete correction: “Let's listen to page two again,” followed by the relevant sentence and image.
- Hinted success and correction retries are recorded separately from independent answers.
- Each authored multiple-choice item has exactly one defensible answer. An open retelling has no pretend automatic correctness score.
- “Not in this story” can be a later reading-comprehension concept, but never requires a beginner to know outside facts.
- A prediction question can allow more than one plausible response; label it as an idea and explain the story's actual outcome afterward.

## 8. Complete example — Bea and the Floating Stick

**Chapter:** 08, Beaver Creek Builders. **Species:** North American beaver. **Fiction:** Bea is a named story character; the club visits an imaginary creek. **Observation focus:** body appearance, swimming, and dam-building. **Focus entries:** beaver, tail, flat, swim, stick, dam. “Brown” is review from Chapter 03, which may also be pre-taught on demand.

Real-world grounding: the animal has a flattened tail, fur that varies in color, and adaptations for swimming. Dams and lodges serve different purposes. These facts inform the sample, while its events are invented. [Smithsonian beaver profile](https://nationalzoo.si.edu/animals/beaver), [Maine beaver information](https://www.maine.gov/ifw/fish-wildlife/wildlife/species-information/mammals/beaver.html)

### Sprout version — six pages

| Page | Narration | Illustration / optional interaction |
| --- | --- | --- |
| S1 | “Look! A beaver. This is Bea.” | Bea beside the creek; tap Bea to hear “beaver” |
| S2 | “Bea has brown fur. Look at her flat tail.” | Side view; tap the tail after narration |
| S3 | “A stick is in the water.” | One obvious floating stick |
| S4 | “Bea can swim. She gets the stick.” | Gentle swim animation with a replay button |
| S5 | “Bea takes the stick to a dam.” | Dam shown separately from a background lodge |
| S6 | “The stick is on the dam. Good work, Bea!” | Finished story action; a journal picture appears |

This is a read-aloud, not a fully decodable beginner text. Before the story, introduce any unknown focus words through images, in more than one short session if necessary.

### Trail version — six pages

| Page | Narration |
| --- | --- |
| T1 | “Bea is a beaver. Today, she finds a stick in the creek.” |
| T2 | “Her fur is brown. Her tail is wide and flat.” |
| T3 | “The stick floats away. Bea gets into the water.” |
| T4 | “Bea swims to the stick and brings it back.” |
| T5 | “She brings it to a dam. A dam can slow the water.” |
| T6 | “Bea puts the stick in place. Our explorers draw her flat tail in their notebook.” |

### Ranger version — six pages

| Page | Narration |
| --- | --- |
| R1 | “At Beaver Creek, Bea is busy. The explorers notice a stick moving across the water and decide to watch quietly.” |
| R2 | “Bea has brown fur and a wide, flat tail. The children sketch these features so they can recognize her again.” |
| R3 | “Bea swims toward the stick. Her back feet are webbed, which helps her move through the water.” |
| R4 | “She collects the stick and carries it to a dam. The explorers watch from the bank without touching Bea or her work.” |
| R5 | “A dam slows the flow of water. Bea's home, called a lodge, is a different structure. A dam and a lodge are not the same thing.” |
| R6 | “The explorers add two drawings to the Atlas: Bea's tail and the dam. They explain what they saw before waving goodbye to the creek.” |

These draft versions demonstrate scope and quiz grounding. Final voice performance and language editing remain production tasks. The stated duration bands are targets; this short Ranger sample would need measured pacing or additional reviewed detail to reach the longer target.

### Example story quiz bank excerpt

| ID | Version / evidence | Prompt and answers | Feedback / purpose |
| --- | --- | --- | --- |
| B01 | Sprout S2 | Audio: “Find the tail.” Choose tail / nose pictures | Replay the tail hotspot; word meaning |
| B02 | Sprout S2 | “What color is Bea's fur?” Brown / blue swatches | Replay S2; listening detail |
| B03 | Sprout S3–S5 | “What does Bea get?” Stick / ball pictures | Replay S4; object vocabulary |
| B04 | Sprout S4 | “Show Bea swimming.” Swimming / sleeping pictures | Match spoken action to meaning; no visible action word |
| B05 | Sprout S3–S6 | Order three pictures: floating stick → Bea gets it → stick on dam | Sequence directly shown events |
| B06 | Trail T2 | “Which word describes Bea's tail?” Flat / round, with picture support as needed | Revisit the description; avoid pictures that are both defensibly round |
| B07 | Trail T5 | “Where does Bea take the stick?” Dam / school pictures | Story detail |
| B08 | Trail T2 | Complete f-l-_-t after hearing “flat” | Only after short-a and the blend have been taught; never required for Sprout |
| B09 | Ranger R3 | “Which body part helps Bea swim in this story?” Webbed back feet / ears | Evidence from R3, not an outside-fact guess |
| B10 | Ranger R5 | Match “lodge” to “home” and “dam” to “slows water” | Two distinct meanings from the passage |
| B11 | Ranger R2 | Say or build: “Bea has a ___ tail.” Flat is the target | Accept another accurate story-supported description in open response; no automated spoken grade |
| B12 | Ranger R1–R6 | “Tell what happened first, next, and last.” | Optional retelling; parent listening or local playback |

The full shipped bank needs at least 20 items for this story. These 12 examples specify the authoring pattern; they are not presented as the entire completed bank. Replay variants reuse the same reviewed evidence and cannot silently add unsupported animal facts.

## 9. Progression, review, and replay value

### The session loop

Continue Adventure proposes one small mission: reconnect with a character, review one familiar word, introduce a small number of new targets, play or hear a story segment, apply the language, then receive a meaningful reward and a natural stopping point. A default session is around 5–8 minutes; longer story sessions can be chosen deliberately. These durations are product hypotheses to validate with the child.

### Adaptive rules — starting implementation specification

| Signal | Action | Measurement rule |
| --- | --- | --- |
| Two independent misses on the same target in a session | Replay a demonstration; reduce choices; revisit later | Supported recovery is not independent success |
| Three independent successes across at least two sessions and two contexts | Mark that skill “growing”; offer a less supported task | At least one success must occur in a later session |
| A correct review after a longer interval and in a changed context | Mark that skill “remembered” provisionally | Confidence can decline after later misses; never call all skills mastered |
| Inactivity or repeated confusion | Offer replay, a simpler route, a parent-help button, or a break | Do not classify a pause as a language error |
| Strong listening but weak decoding | Keep rich read-alouds; simplify printed-word tasks | Skill difficulty is independent |

Proposed review opportunities occur around the next day, three days, one week, two weeks, and one month, adjusted by success and actual use. These are starting product rules, not validated guarantees. Missed sessions do not create a debt or penalty. Replays of the same answer in one sitting do not count as spaced retrieval.

### Replay without repetition fatigue

- Revisit a favorite story at a different support level.
- Change the mission: observe the animal, deliver a matching postcard, assemble its journal page, then compare it with a familiar animal.
- Reuse words in different settings: “flat” can describe a tail in one story and a surface in another, with the new sense taught explicitly.
- Choose between two small story routes that share the same learning objectives; authored branches converge on the same reviewed ending.
- Give creative rewards: treehouse decorations, illustrated field-guide pages, a virtual garden, and invitations to story events.
- Add a new “discovery layer” when the child returns with stronger skills: a single adjective becomes a description, then a comparison or explanation.
- Offer optional parent-child missions outside the screen: find something soft, describe a toy, or retell a favorite scene. No camera or upload is required.

Rewards never require microphone use or a perfect score. No ads, loot boxes, losing lives, competitive rankings, or streak punishment. All starter experiences remain accessible, with a parent override for the proposed sequence.

## 10. Vocabulary architecture and counting

The appendix provides a concrete 600-entry seed bank. It is a starting editorial inventory, not the only language allowed in stories. Story authoring may add needed entries, such as “webbed,” and the release report must show the actual deduplicated total.

| Inventory rule | Requirement |
| --- | --- |
| Counting unit | Distinct normalized written entries, case-insensitive; a spelling variant does not inflate the count |
| Forms versus concepts | Common forms such as “am,” “is,” and “are” count as different written entries but belong to one grammatical family; do not claim 600 distinct concepts or lemmas |
| Regional spelling | Store Canadian/US variants such as colour/color and grey/gray under one entry; display consistently with the chosen setting |
| Reuse | A word first introduced in one chapter can occur anywhere else without being counted again |
| Multiple meanings | Keep sense-specific examples; recognizing “bank” beside a river does not prove knowledge of a financial bank |
| Shared words | Teach the 120 core entries in context across chapters; they are not a memorization list presented on day one |
| Oral versus written targets | Each entry declares which skills it supports and its phonics prerequisites |
| Assessment eligibility | A word is assessed only after an appropriate introduction or verified prior knowledge |
| Registry growth | Add script-required targets as real entries; distinguish them from incidental unassessed language |

### Word record requirements

Stable ID; canonical spelling; displayed variants; meaning/sense; part of speech; brief Traditional Chinese support; chapter of introduction; reviewed image; normal/slow audio; example sentence; phonemes/graphemes where applicable; phonics prerequisites; irregular parts; supported activity types; related story IDs; content version and review status.

The vocabulary bank is broader than a list of animal names. It includes body, family, school, food, clothing, transport, feelings, actions, position, time, descriptive language, and words for building sentences.

## 11. Visual direction and responsive interaction

Direction: a polished illustrated storybook with warm cream surfaces, forest green navigation, sky and coral accents, paper-like cards, and expressive original characters. Use cohesive illustrated backgrounds with clear focal objects and consistent lighting. Motion communicates an action, such as swimming or hopping, and becomes quiet during listening.

Characters: Pip the curious club guide, Bea the practical creek builder, Nori the thoughtful new friend, and a parent-like narrator. Each has a recognizable silhouette and personality. The child's avatar can choose a backpack, badge, and companion; avoid assumptions that girls must prefer pink or princess themes.

| Surface | Phone | Tablet | Laptop |
| --- | --- | --- | --- |
| Adventure map | Scrollable region cards and a focused local map | Illustrated map plus compact chapter tray | Centered map with journal panel |
| Story Time | Single-page scene; large reachable audio controls | Large page with optional facing text panel | Comfortable storybook width with text beside illustration |
| Quiz | One question; 2–4 large answers; avoid scrolling while answering | Scene and answer tray side by side when space allows | Scene with keyboard-accessible answer panel |
| Word Builder | Large tiles that wrap cleanly; tap-to-place | Wider tile tray and clear slots | Tap, click, or keyboard alternatives |
| Parent area | Stacked summaries | Two-column cards | Wider comparison tables and filters |

### Reusable components

App shell; region map; chapter card; story shelf; story player; caption panel; audio control; scene hotspot; answer card; letter tile/slot; sentence tray; evidence replay; companion prompt; quest progress; journal entry; reward reveal; parent gate; settings dialog; empty/error/recovery screen.

### Interaction acceptance requirements

- Primary child targets at least 56 × 56 CSS pixels; generous gaps and visible pressed/selected states.
- No hover-only actions, compulsory dragging, or required keyboard typing.
- No unintended horizontal overflow from 320 px upward; story controls stay visible around mobile safe areas and text zoom.
- Orientation changes preserve the current page, answers, and activity state.
- Visible keyboard focus, meaningful accessible names, contrast checks, and cues beyond color.
- Reduced-motion support; music/effects/narration settings; background music ducks or stops during speech.
- One narrator at a time; pressing replay stops the current prompt cleanly.
- A clear tap-to-start audio action, recoverable failed downloads, and usable loading states.
- Chapters and audio load as needed rather than downloading every illustration and recording at launch.
- Layout tests cover narrow phones, large phones, tablet portrait/landscape, and desktop. Actual-device checks cover touch, audio interruptions, and microphone behavior.

## 12. Audio, speaking, and parent experience

Use licensed or original, reviewed recordings for all shipped vocabulary, phonics, stories, and instructions. A consistent North American voice direction matters more than promising a particular vendor. Natural slow recordings are preferable where mechanical slowing harms sound clarity. Audio must be approved against the final script.

Speaking works without recognition: hear a model, repeat voluntarily, and optionally record/replay locally. Microphone access is parent-enabled. Stop capture on navigation or interruption and discard temporary recordings when finished. If permission is denied or unavailable, provide the same learning route without recording.

Automatic speech recognition and pronunciation scoring remain outside the MVP. Speech recognition is not a validated pronunciation assessment, and browser support and remote processing vary. Any later remote speech feature requires a parent-facing data choice and real-device validation. [MDN SpeechRecognition](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition)

### Parent dashboard

- Choose starting support, audio/spelling locale, Chinese help, and optional session-length guidance.
- See words introduced, practiced, independently recognized, and reviewed later, broken down by skill.
- See which story versions were heard and which details were understood independently versus with hints.
- Read concrete suggestions: “Try describing a toy using long and short,” not only a percentage score.
- Switch local learner profiles, export/import progress, reset a profile, and preview upcoming content.
- Configure microphone use and review a simple privacy explanation.

Support multiple local profiles in the MVP because siblings may share devices, but create only one by default. A parent gate prevents accidental settings changes; it is not authentication. No child email, date of birth, public profile, open chat, or raw recording upload is required.

Progress starts device-local. Responsive play on several devices does not imply automatic sync. Provide a parent-controlled export/import bridge. Account-based sync is a later enhancement, with stable profile/content IDs prepared from the start.

## 13. Technical design for later implementation

This revision specifies behavior and content; final framework and hosting choices are made when implementation starts. The repository currently has no application framework to preserve. Prefer a component-based static web app for the first release, with no backend needed for local learning. A later installable/offline experience should use explicit downloadable content packs and a verified recovery/update strategy.

| Module | Responsibility |
| --- | --- |
| Content registry | Versioned words, chapters, stories, variants, sources, audio and image references |
| Story engine | Pages, narration, highlighting timestamps, hotspots, resume, and approved branches |
| Activity engine | Shared mechanics, hints, answer rules, and story evidence replay |
| Curriculum rules | Prerequisites, per-skill difficulty, introduction order, and review scheduling |
| Progress store | Local profile state, attempt events, resume points, export/import, and migrations |
| Reward system | Mission completion, journal unlocks, and creative customization |
| Asset manager | Lazy loading, caching boundaries, failed-audio recovery, and future offline packs |
| Parent area | Settings, progress summaries, profile management, and safe resets |

### Data relationships

| Entity | Required relationships / fields |
| --- | --- |
| Chapter | Region ID, introduced word IDs, reused word IDs, mission IDs, two story IDs |
| Story | Chapter ID, genre, species if relevant, source references, supported tier IDs |
| Story version | Story ID, support tier, ordered page IDs, text/audio, target words, prerequisites |
| Question | Story-version ID, evidence page IDs, skill, target words, answers, distractors, explanation |
| Mission | Ordered activities, alternate authored route, support rules, reward, resume checkpoint |
| Attempt | Profile ID, item/content version, time, skill, first answer, hint/retry flags, outcome |
| Progress | Per-word/per-skill state, review dates, story history, last activity, schema version |

### Example story-linked question contract

```json
{
  "id": "ch08-bea-sprout-b03",
  "storyId": "ch08-bea-floating-stick",
  "storyVersionId": "ch08-bea-floating-stick-sprout-v1",
  "evidencePageIds": ["S3", "S4"],
  "skill": "listening-meaning",
  "targetWordIds": ["word-stick-object"],
  "prompt": "What does Bea get?",
  "optionIds": ["picture-stick", "picture-ball"],
  "correctOptionId": "picture-stick",
  "feedbackReplayPageId": "S4",
  "requiredIntroducedWordIds": ["word-stick-object", "word-ball-toy"],
  "contentReviewStatus": "draft"
}
```

The example IDs are proposed schema examples, not existing repository data. Prerequisite words such as “ball” must be introduced before this question; the seed inventory places it in Chapter 17, so early use requires on-demand pre-teaching. A content validator rejects missing references instead of silently assuming they exist.

### Content pipeline and validation

1. Choose chapter outcomes and target words; check the shared inventory before adding entries.
2. Draft the two story concepts and three support versions for each.
3. Review language level, story coherence, animal facts, and phonics suitability.
4. Author questions against evidence in each specific story version.
5. Create original/licensed art and recordings; check script/audio consistency and picture ambiguity.
6. Validate IDs, duplicate counts, prerequisites, correct answers, evidence links, and asset completeness.
7. Test the story and activities with the target learner; revise unclear directions.
8. Publish a versioned content pack with migration-safe IDs and a review record.

No open-ended runtime AI story generation is needed for the MVP. Assisted authoring may help production, but only reviewed, versioned material reaches the child. Do not introduce credentials into a client-side bundle.

## 14. Delivery milestones and acceptance gates

| Milestone | Deliverable | Exit condition |
| --- | --- | --- |
| M0 — this revision | Expanded Markdown, content inventory, story example, acceptance criteria | Reviewable scope exists |
| M1 — design and vertical slice | Design system, home/map, Story Time, two chapters, four stories, representative quiz mechanics | Child can start a story, replay audio, answer, and resume on phone/tablet/laptop |
| M2 — reusable learning systems | All eight modes, separate skill progression, review, rewards, profiles, parent controls | A scripted learning session works end to end without fake progress or dead-end controls |
| M3 — full MVP content | 24 chapters, at least 600 entries, 48 stories/144 versions, 96 routes, at least 960 story quiz items | Content and asset audit passes; no placeholder chapters presented as complete |
| M4 — release validation | Device checks, save/migration checks, accessibility review, factual and curriculum coverage audit | Concrete issues resolved; remaining optional-feature limitations stated |
| M5 — ongoing expeditions | Additional chapters and more advanced versions | Expand based on learning evidence and interest, without resetting progress |

The 24-chapter launch requirement is not satisfied by shipping two working chapters with 22 locked mock cards. Development can occur in increments; each increment must clearly state its completed content.

### Functional acceptance

- Child can enter from zero reading ability, complete an activity, and discover replay without reading a manual.
- Every chapter has actual playable content, complete art/audio, two stories, and four mission routes.
- Story quizzes always reference the version shown and can replay their evidence.
- Counts distinguish entries from concepts, stories from versions, and generated layouts from authored questions.
- No incorrect prerequisite mixing: a beginner listener is not forced to type, decode “beaver,” or pass a microphone test.
- Progress survives reload and content updates; export/import validates schema and prevents accidental replacement without a parent choice.
- Corrected/hinted responses never masquerade as independent first-attempt success.
- An inaccessible microphone, interrupted audio, or unavailable asset has an understandable fallback.
- Narrow screens, landscape rotation, mouse/keyboard use, text zoom, and reduced motion work without hiding controls.

### Learning and usability validation

Observe short sessions rather than treating time spent as success. Record whether she understands the prompt, can find the audio button, handles an error calmly, and recognizes a word later in a new picture. Use a few held-out examples rather than rehearsing the same quiz until its score rises. Ask a parent or educator to review the language progression and selected story questions before claiming Grade 1 coverage.

In parent reports, distinguish engagement, exposure, assisted practice, independent performance, and delayed recall. The product can show progress against its objectives; it cannot infer school readiness from stickers or one overall score.

## 15. Expansion design for the next few years

| Expansion area | New adventures | New language demands |
| --- | --- | --- |
| Seasons and habitats | Snow trail, desert camp, rainforest observation station, migration mailbox | Compare features, explain changes, use richer descriptors |
| School and community | Library mystery, science day, neighborhood helpers, team projects | Ask for clarification, follow multi-step directions, explain a choice |
| Everyday stories | A changed plan, a shared project, a lost invitation, a new friendship | Cause/effect, sequence, character feelings, polite conversation |
| Growing readers | Longer mysteries and paired fact/story texts | More complex spelling patterns, word parts, context clues, evidence-based answers |
| Young storytellers | Assemble a comic, narrate a field guide, create an alternate ending | Connect sentences, retell coherently, give reasons, revise an idea |

Advanced modes change the task, not just the number of answer options. The same beaver chapter can begin with “tail,” return as “a flat tail,” and later ask the learner to compare descriptions in two texts. Expansion packs must bring new stories and contexts, not promise years of value from endless randomization.

## 16. Editorial decisions and open assumptions

Use North American English pronunciation with a configurable Canadian/US spelling preference; default to the parent's preferred locale at setup. Keep Traditional Chinese help optional and available in the parent area. Use original story characters, reviewed nonfiction facts, accessible touch-first interactions, and local progress for the MVP.

The authoring inventory below intentionally supplies a substantial starting vocabulary rather than claiming completeness. Some supporting words used in story drafts are additional entries to register. The full content audit must account for them before release. A child can explore chapters out of catalog order with on-demand pre-teaching and parent support.

No extra product decision is required to review this specification. Further personalization can use her favorite animals, current letter knowledge, and main device when implementation begins.

## Appendix A — 600-entry MVP seed inventory

The following bank contains 24 groups of 20 thematic entries plus 120 shared entries. It has been checked for exact-form duplicates. It is an editorial seed inventory, not a standardized Grade 1 word list. Each chapter repeats earlier words freely in its stories.

| Chapter | 20 thematic entries |
| --- | --- |
| 01 — Welcome to Wonderwood | hello, friend, name, family, mother, father, sister, brother, baby, grandma, grandpa, person, child, adult, boy, girl, neighbor, smile, hug, goodbye |
| 02 — The Mirror Meadow | body, head, face, hair, eye, ear, nose, mouth, tooth, tongue, neck, shoulder, arm, hand, finger, leg, knee, foot, toe, skin |
| 03 — Rainbow Repair Shop | red, blue, yellow, green, orange, purple, pink, brown, black, white, gray, circle, square, triangle, rectangle, star, heart, oval, line, dot |
| 04 — Counting Carnival | one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty |
| 05 — The Treehouse Move | home, house, room, door, window, wall, roof, floor, bed, pillow, blanket, chair, table, lamp, sofa, shelf, clock, mirror, rug, key |
| 06 — Picnic Orchard | apple, banana, pear, peach, grape, lemon, strawberry, blueberry, melon, cherry, carrot, potato, tomato, pea, bean, corn, bread, rice, milk, cheese |
| 07 — Pet Care Club | cat, dog, rabbit, hamster, kitten, puppy, pet, bowl, brush, leash, feed, drink, wash, clean, sleep, rest, wake, gentle, soft, careful |
| 08 — Beaver Creek Builders | beaver, duck, frog, turtle, otter, fish, pond, river, stream, lake, dam, lodge, fur, tail, flat, swim, wood, mud, stick, bank |
| 09 — Forest Footprint Trail | fox, deer, bear, squirrel, raccoon, owl, forest, tree, leaf, branch, root, bark, seed, nut, den, hollow, bush, moss, track, paw |
| 10 — Tiny Garden Giants | bee, butterfly, ant, beetle, ladybug, spider, worm, snail, insect, wing, antenna, petal, flower, garden, soil, dig, plant, grow, small, tiny |
| 11 — Wildlife Passport | lion, elephant, giraffe, zebra, monkey, tiger, panda, hippo, camel, kangaroo, trunk, tusk, stripe, spot, long, short, tall, heavy, light, strong |
| 12 — Ocean Rescue Post | whale, dolphin, shark, seal, crab, octopus, squid, jellyfish, shell, coral, ocean, beach, sand, wave, fin, flipper, tentacle, tide, deep, shallow |
| 13 — Sunrise Farm | cow, pig, sheep, goat, horse, hen, chick, rooster, barn, hay, wool, hoof, fence, tractor, farmer, field, crop, wheat, egg, harvest |
| 14 — The Dress-Up Express | shirt, pants, shorts, dress, skirt, sock, shoe, boot, hat, coat, jacket, sweater, mitten, glove, scarf, pocket, button, zipper, belt, umbrella |
| 15 — Weather Watch Station | sun, moon, cloud, rain, snow, wind, fog, storm, rainbow, sky, hot, cold, warm, cool, wet, dry, sunny, rainy, snowy, windy |
| 16 — First Day at Adventure School | school, teacher, student, classroom, desk, book, page, pencil, crayon, eraser, paper, scissors, glue, backpack, lesson, story, letter, word, question, answer |
| 17 — Playground Motion Mission | run, walk, jump, hop, skip, crawl, climb, slide, swing, throw, catch, kick, roll, bounce, dance, stretch, ball, turn, stop, start |
| 18 — The Friendship Festival | happy, sad, angry, scared, excited, calm, proud, shy, kind, brave, lonely, tired, hungry, thirsty, sorry, please, thank, share, help, wait |
| 19 — Town Explorer | town, street, road, sidewalk, crossing, sign, bus, car, truck, train, bike, boat, plane, wheel, seat, helmet, driver, station, library, park |
| 20 — Little Market Kitchen | shop, market, money, coin, price, buy, sell, bag, basket, bottle, cup, plate, spoon, fork, pot, pan, soup, sandwich, cookie, lunch |
| 21 — The Lost Treasure Map | above, below, beside, between, behind, near, far, left, right, top, bottom, front, back, inside, outside, empty, full, open, closed, opposite |
| 22 — The Clockwork Camp | morning, afternoon, evening, night, today, tomorrow, yesterday, day, week, month, year, hour, minute, early, late, breakfast, dinner, bath, bedtime, weekend |
| 23 — Inventor Island | build, fix, test, change, push, pull, float, sink, magnet, metal, plastic, rock, glass, rubber, smooth, rough, hard, round, straight, curved |
| 24 — The Great Story Parade | music, song, drum, bell, flute, piano, guitar, rhythm, loud, quiet, fast, slow, picture, paint, draw, color, shape, pattern, costume, parade |

### Shared core — 120 entries

These entries support instructions and sentences. They are introduced in meaningful phrases and linked to reviewed examples, not all taught as isolated sight words. Pronoun capitalization is preserved for display; counting is case-insensitive.

| Group for inventory display | 20 entries |
| --- | --- |
| 1 | a, an, the, this, that, I, you, he, she, it, we, they, me, him, her, us, them, my, your, his |
| 2 | our, their, all, other, many, more, little, no, not, yes, and, or, but, because, so, if, then, as, when, who |
| 3 | what, where, why, how, am, is, are, was, were, be, have, has, had, do, does, did, can, could, will, would |
| 4 | to, of, in, on, at, by, for, from, with, without, into, onto, out, up, down, over, under, through, around, across |
| 5 | before, after, again, also, too, very, just, only, even, here, there, now, always, never, sometimes, usually, often, together, away, about |
| 6 | see, look, hear, listen, say, tell, ask, read, write, eat, go, come, get, make, give, take, find, like, want, need |

## Appendix B — source and repository record

References consulted for this revision:

- [British Columbia Grade 1 English Language Arts](https://curriculum.gov.bc.ca/curriculum/english-language-arts/1/core): local reference for integrated comprehension and communication.
- [Common Core Grade 1 foundational reading](https://www.thecorestandards.org/ELA-Literacy/RF/1/): sound awareness, decoding, and fluency targets.
- [Common Core Grade 1 language](https://www.thecorestandards.org/ELA-Literacy/L/1/): vocabulary in context and language use.
- [Common Core Grade 1 literature](https://www.thecorestandards.org/ELA-Literacy/RL/1/): story details, retelling, characters, settings, and events.
- [Smithsonian National Zoo — beaver](https://nationalzoo.si.edu/animals/beaver): animal appearance and adaptations for the sample.
- [Maine Department of Inland Fisheries and Wildlife — beaver](https://www.maine.gov/ifw/fish-wildlife/wildlife/species-information/mammals/beaver.html): dams, water, and lodge distinctions for the sample.
- [MDN SpeechRecognition](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition): browser and processing caveats retained from the original proposal.

Content quantities, game rules, chapter concepts, support levels, review intervals, and session durations are product-design proposals. The sources do not certify those choices or this product's effectiveness. All story scripts and illustrations should be original or appropriately licensed; sources inform factual review, not copying.

GitHub was rechecked for this revision. The repository contains README.md and a placeholder index.html. This task updates the existing planning document; repository code, issues, branches, and deployments remain unchanged. The revised brief is ready to guide implementation in supaquantboys/kids_place.
