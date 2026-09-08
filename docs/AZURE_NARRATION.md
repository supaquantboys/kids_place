# Reusable Azure narration

Status: integration prepared; no Azure credentials or generated recordings available yet.

Use an Azure Speech resource. Store `AZURE_SPEECH_KEY` as a secret environment variable and `AZURE_SPEECH_REGION` as its region (for example eastus). Never commit the key or place it in frontend code.

1. Run `node scripts/compile-content.mjs`.
2. Run `node scripts/azure-narration.mjs` to see the clip and character plan without contacting Azure.
3. With credentials securely configured, run `node scripts/azure-narration.mjs --generate`.
4. Audition the saved MP3 files before publication. Generated is not editorially approved.
5. Commit `assets/narration/` to preserve audio for reuse, build and publish through a checked PR.

Jenny Neural (US English) is the initial audition voice. Text is XML-escaped. File identities include text, voice, speaking rate and output format; unchanged clips are reused. Each sentence is a separate MP3, supporting replay and sentence highlighting. Slow playback preserves pitch through the browser audio element. No learner text, microphone recordings or credentials are sent by the game to Azure. Generation runs outside the browser. A failed request stops with existing files retained for resumable generation; the script does not automatically retry paid requests.

Resource quotas apply; the printed text character count is a planning estimate, not a billing guarantee. No new third-party bedtime stories have been imported yet; their credits and license records must accompany any later imports.

Reference: https://learn.microsoft.com/en-us/azure/ai-services/speech-service/rest-text-to-speech
