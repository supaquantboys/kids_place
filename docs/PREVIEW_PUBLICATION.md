# Public preview — 2026-09-08

The owner explicitly requested publication of the current colorful build. Main now publishes a labeled preview after tests, build, and a reporting content audit. This is not full MVP acceptance: issue #1 remains open. The strict full-release command `node scripts/audit-content.mjs --release` is preserved and still fails until the documented reviews and missing features are completed.

The deployed footer identifies the preview and Parents describes outstanding content limitations. Reviewed narration, editorial approval, more illustrations and complete device/accessibility QA remain pending. Publication verification checks the actual deployed commit, content counts, and every application asset over HTTPS. These HTTP checks do not substitute for interactive browser QA.
