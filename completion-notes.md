# Release workflow evidence — in progress

Attributed course: [GitHub Skills release-based-workflow](https://github.com/skills/release-based-workflow). GitHub, Inc. MIT license remains unchanged. This is an instructor browser-game exercise, not an original AI product or deployed service.

## Verified progress

- Teacher initialized release-v1.0 and update-text-colors.
- Despite the lesson's claim, main and release-v1.0 were actually unprotected at initialization.
- Beta release ID 412092315, tag v0.9, target main, prerelease=true, draft=false. Its commit is 4eb634417c17e682f204dcae7de1fb2c88409fa1.
- Instructor green text/background PR2 merged e0769a20ffe47c8d658e843176085bbc7a7f810b.
- Initial CSS feature PR3 merged 865ff0169c71d19e3bb126d0a35bfa0c25ef2be8.
- Sequencing failure: I prepared the CSS feature before beta publication, carrying Step 1 metadata into the release branch. Step2 run38464956710 skipped On feature added; the teacher did not advance.
- Recovery PR4 recreated the prescribed feature from authentic current main after beta. Ordinary merge conflict resolution retained current main's instructor-generated metadata and README, both release feature assets and the black CSS declaration. No teacher workflow or step flag was manually bypassed. After fresh mergeability verification, PR4 merged828e72bed8165dd7d8c3a6a241166b3045bab304. Step2 run38466597472 and Step3 run38466779283 advanced normally.
- Release PR5 is open. Main was freshly verified at teacher Step4.
- Stable draft, final stable publication, hotfix branch/PRs, hotfix release and fresh Chromium rendering proof remain unfinished.

## Planned independent proof

A separate draft PR1 prepares real headless Chromium rendering of original files at actual release tags. A loopback-only static server exposes only instructor game assets inside the disposable GitHub runner. External browser requests are blocked. Canvas pixel counts and screenshots will establish black beta, green stable regression, black corrected hotfix. The runner records tag commit SHAs and keeps evidence for seven days.

This will be real browser rendering, not a VM stub or a claim of deployment. Teacher progress alone does not prove rendering or tag contents. No Pages, secrets, private runtime, paid model inference or local Docker changes are used.
