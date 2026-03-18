# AI Usage Overview

## Tool used
Claude Code (CLI)

## How the tool was used
Claude Code was used directly inside the local development environment to:
- generate the initial Playwright test suite
- refactor failing tests
- improve selectors
- reduce flaky behavior
- suggest more realistic waits and assertions

## Workflow
1. Generated the initial test suite with Claude Code
2. Executed tests locally in Playwright
3. Reviewed failing scenarios
4. Refined the suite with additional prompts
5. Manually reviewed selected changes
6. Re-ran the suite and evaluated improvements

## What AI helped with
- initial test structure
- selector alternatives
- fallback strategies
- wait/timeout improvements
- reducing unstable assertions

## What was still done manually
- reviewing whether tests were too weak or too strict
- deciding which failures were meaningful
- making final judgment on which refinements to accept
- manually improving login fallback handling
- verifying the final pass/fail balance

## Final outcome
The final Chromium run achieved:
- 28 total tests
- 23 passed
- 5 failed

The remaining failures were kept because they still represented unstable or incomplete UI behavior in the demo application.