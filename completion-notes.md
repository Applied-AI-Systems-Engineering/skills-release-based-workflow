# Release workflow hands-on evidence

Completed the attributed [GitHub Skills release-based-workflow](https://github.com/skills/release-based-workflow) exercise and independently verified actual release tags and real Chromium rendering. GitHub, Inc. MIT license is retained unchanged. This is instructor game practice, not an original AI product or deployed service.

## Release, branch and hotfix work

| Release | Commit actually tagged | State | Release ID |
| --- | --- | --- | --- |
| v0.9 | 4eb634417c17e682f204dcae7de1fb2c88409fa1 | Published pre-release | 412092315 |
| v1.0.0 | b5226b61b15cb96c2a0d157e962daf6adf1cd5d2 | Published stable | 412106180 |
| v1.0.1 | 47c370cce5c29f2e24b96df5944aa0aa43799714 | Published stable hotfix | 412109837 |

- PR 2 introduced the instructor green text/starfield fixture into release-v1.0, merge e0769a20ffe47c8d658e843176085bbc7a7f810b.
- PR 3 added black page CSS, merge865ff0169c71d19e3bb126d0a35bfa0c25ef2be8.
- Sequencing failure: I prepared CSS before beta publication, carrying Step 1 teacher metadata. Step 2 run 38464956710 correctly skipped On feature added. This was not accepted as course completion.
- Recovery PR 4 recreated the prescribed feature from authentic current main after beta. Ordinary merge resolution retained current main's teacher-generated metadata/README, both release feature assets and black CSS. No teacher workflow or step flag was manually rewritten. A premature merge retry initially returned cached conflict405; fresh mergeability verified clean before merge828e72bed8165dd7d8c3a6a241166b3045bab304. Step 2 run 38466597472 and Step 3 run 38466779283 then advanced normally.
- Stable v1.0.0 draft was saved with generated release notes temporarily based on release-v1.0, then targeting main. PR 5 merged ea4027d9a0b6d39833923347eb04d4f88d849cc0. After genuine teacherStep 5, the existing draft was published from main. Its generated Full Changelog uses commits/v1.0.0; no claim that it generated a beta-to-stable comparison.
- Instructor hotfix branch files were inspected. Fixed game.js matches the original instructor blob 4c059ee8f563f4ba874b166bec705081a68c92bb.
- PR 6 fix-game-background→hotfix-v1.0.1 merged 68f2b6dfa0c6268cf4fff5204e3a2c597fa69f71. PR 7 hotfix→main merged 7f49d23e6785ce2f694512a51accc4d747c603e9.
- After genuine teacherStep 7, root published v1.0.1 with generated notes comparing v1.0.0...v1.0.1 and explicit course attribution.
- Actual teacher finish: main step file X, Step 7 run 38467981159 success. Teacher finish is recorded separately from runtime proof.
- The lesson said branches were already protected, but initial API inspection showed main/release branches unprotected. No branch-protection claim is made here.

Root performed release forms and verified UI results; this worker separately checked release API fields, tag commit objects, source blobs, teacher events and job logs.

## Real browser proof of regression and recovery

Verifier PR 1 was held until all tags existed, marked ready through root UI, then merged 00bc55bc70f6aa3cca2107c2dfa82ccbcbe3c65f. [Run38468113657](https://github.com/Khemology/skills-release-based-workflow/actions/runs/38468113657), job 115539958288, completed **success**.

A real headless Chromium browser rendered original instructor files fetched from each actual Git tag through a loopback-only HTTP server. External font/network requests were blocked. The test read actual canvas pixels, required the expected color to occupy over 90% of the canvas, checked stable/hotfix body CSS and rejected application JavaScript errors. This is not a VM stub.

Canvas dimensions: 320×480, total 153600 pixels.

| Tag | Black pixels | Green pixels | Computed body background | Result |
| --- | ---: | ---: | --- | --- |
| v0.9 | 147917 | 0 | rgba(0, 0, 0, 0) | Passed: black canvas |
| v1.0.0 | 0 | 152607 | rgb(0, 0, 0) | Passed: intentional green regression |
| v1.0.1 | 147928 | 2525 | rgb(0, 0, 0) | Passed: black restored, green text remains |

All three snapshots recorded zero application JavaScript errors. Actual logged tag SHAs match the release table. The coordinator independently fetched the same successful job logs and verified the observations.

Runtime: pinned Playwright 1.64.0; Chrome for Testing/Headless Shell 156.0.8078.4, Chromium build 1248, on standard GitHub-hosted Ubuntu. Random stars mean exact pixel counts can vary on rerun; the dominant-color threshold is the assertion, not these exact counts.

## Preserved evidence and rerun

[Download Actions artifact 11851040061](https://github.com/Khemology/skills-release-based-workflow/actions/runs/38468113657/artifacts/11851040061): tagged-release-rendering-38468113657, four files (three screenshots and render-results.json), 24673 bytes, uploaded ZIP SHA256:

`d37f3392843b936fe0df025c12b94c5a50813d393652c7e33f430ad8b742c70e`

The artifact is retained seven days, expiring 2026-10-20T21:07:35Z. Durable tagged source, verifier and measured results in this note permit rerunning after artifact expiry. Screenshots were produced/uploaded; no separate visual screenshot inspection is claimed.

Run the **Verify tagged release rendering** workflow manually to reproduce all three snapshots. It uses read-only contents permission, checkout credentials are not persisted, server binding is 127.0.0.1, assets are explicitly limited to instructor files, and timeout is 10 minutes. Dependency/browser installation uses network; page requests outside its loopback origin are blocked. No new credentials are required.

Pinned Actions match official release references: checkout v6.0.2/de0fac2e4500dabe0009e67214ff5f5447ce83dd, upload-artifact v4.6.2/ea165f8d65b6e75b540449e92b4886f43607fa02. The successful run warned that upload-artifact v4 targets deprecated Node 20 and is forced onto Node 24; it is not represented as the latest action version.

## Learning and limits

Release objects, tags, branch heads and draft targets are distinct. Publication must name the actual commit containing the change, and a hotfix must flow back into main. Teacher event completion does not replace independently verified tagged behavior.

This exercise proves release branching, publication, notes, hotfix propagation and the demonstrated title-screen canvas regression/recovery. It does not prove complete gameplay, mobile compatibility, deployment, model inference, advanced AI architecture competence by itself, or integration into the private system. No GitHub Pages, Codespaces, paid hosting, new secret, private runtime or local Docker change occurred.

Automated Codex reviews were started when PR 1 became ready. At final inspection they still reported Running, with no review objects or inline findings returned. Independent runtime/source review is verified; completed automated review is not claimed.

Git tags and release objects are not immutable provenance here: release API reports immutable=false, and the teaching branches were unprotected. Tags can be repointed by authorized writers. The recorded commit SHAs and successful run identify the snapshots actually tested; no signature or attestation is claimed.
