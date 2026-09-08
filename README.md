# kids_place
Kids learn english

## Wonderwood Explorer Club — development preview

Work in progress for [issue #1](https://github.com/supaquantboys/kids_place/issues/1), tracked in [draft PR #2](https://github.com/supaquantboys/kids_place/pull/2). This branch is not the completed or published full MVP.

Use Node 22 or later. There are no npm package dependencies.

```sh
npm test
npm run build
npm run dev
```

Open the local address printed by the server. Serve the generated `dist` directory over HTTP for a production-build preview; opening `index.html` with `file://` does not support module/content loading.

The eight activity interfaces, 24 chapter entry points, stories, local profiles, parent controls, export/import and optional recording are implemented. Content counts and missing release requirements are reported by `npm run audit:content`. Mechanical drafts are explicitly distinguished from individually authored questions; authored content still needs editorial review.

Progress stays in this browser. Export backups in Parents. Recording is off by default, optional, temporary, and never uploaded. Narration currently uses available local English device voices, with a read-together fallback. Reviewed production recordings are not included.

GitHub Actions tests and builds the feature branch and PR, and uploads a downloadable alpha artifact. Publication from main additionally requires `node scripts/audit-content.mjs --release` to pass. It currently fails on real unmet requirements. GitHub Pages configuration and deployed behavior have not been verified.

See [the original specification](docs/Kids_Place_Game_Concept.md), [validation evidence](docs/VALIDATION.md), and [content review notes](docs/CONTENT_REVIEW.md).
