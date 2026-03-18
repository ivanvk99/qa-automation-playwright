# Claude Workflow

## AI-assisted automation workflow

1. Claude Code generated an initial Playwright suite in the local project
2. The generated tests were executed locally
3. Initial failures were reviewed in the Playwright report
4. Claude Code was prompted again to refine unstable tests
5. Test selectors and waits were improved iteratively
6. Manual review was used to approve or reject specific changes
7. Final tests were executed again and the improved result was documented

## Main workflow principle
The goal was not to make every test pass artificially, but to reduce false failures and keep remaining failures meaningful.

## Final result
The suite ended with strong smoke/regression coverage and only a small number of remaining failures related to unstable UI behavior in the demo application.