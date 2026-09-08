# Validation and release status

Development log, 2026-09-08. This is a playable alpha checkpoint, not full-MVP acceptance or a deployment report.

## Automated evidence

`node scripts/compile-content.mjs` builds the catalog from the unchanged specification inventory and authored source modules. `node --test tests/*.test.mjs` currently passes 38 tests covering content relationships, exact-version question evidence, word examples, separate skills, supported versus independent answers, delayed review, profile isolation, corrupt/quota storage, backup validation, and audio/recording races. `node scripts/build.mjs` succeeds. These tests establish software invariants, not educational effectiveness or factual approval.

GitHub Actions run [34187162007](https://github.com/supaquantboys/kids_place/actions/runs/34187162007) passed checkout, tests and static build for checkpoint `ab3539c584e769a930d59ace98080c3c6fa7373a`. Deployment was skipped, as expected for a PR. Later commits require their own successful checks.

## Browser observations

Before the browser connection was lost, development QA observed the desktop home layout, chapter 08 activity links, story page navigation, a page-2 bookmark surviving reload, the Sprout quiz route, wrong-answer feedback revealing the exact page-1 clue, and a corrected answer completing that item. The desktop artwork/layout was visually inspected. The 320-pixel embedded harness loaded, but the full responsive matrix was not completed.

During continuation, local preview navigation first returned connection refused. After the preview server restarted successfully, the browser returned a Cloud browser URL-policy rejection. Further browser attempts were stopped; no alternate browser or policy workaround was used. Consequently, later navigation fixes and new review behavior have automated/source validation but no fresh visual or end-to-end browser acceptance.

The checked-in `tests/responsive.html` harness supports 320, 390, 768, 1024 and 1280-pixel embedded viewports and a 200% text control. A harness is a test aid, not evidence that all viewports or physical devices passed.

## Outstanding release work

| Area | Still required |
| --- | --- |
| Content | Complete individually authored quiz bank and editorial review; richer story versions meeting recorded duration targets; grammar/phonics word metadata |
| Learning modes | Full six-stage phonics sequence; meaningful Nature Detective compare/sort interactions; chapter-specific mission variety and prerequisite checks |
| Media | Reviewed word pictures, page-specific story art, normal/slow voice and phonics/instruction recordings |
| Performance/storage | Chapter content packs loaded on demand; long-history compaction/migration validation (the alpha retains at most 20,000 attempts per learner) |
| Accessibility | Complete touch target, keyboard, contrast, reduced-motion, text zoom and orientation matrix |
| Devices/learner | Real phone/tablet/laptop audio interruption and microphone tests; short beginner learner observation |
| Release | Successful full release audit and PR checks, merge, authorized Pages configuration, successful deployment, and live verification |

No issue closure, merge or publication should be inferred from an alpha artifact. The release audit checks missing assets/metadata and pending review evidence and exits nonzero in release mode until these requirements are met. It is not an approval request or a replacement for the user's authorization.
