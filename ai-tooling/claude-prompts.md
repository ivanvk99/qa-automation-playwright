# Claude Prompts

## 1. Initial Automation Prompt

**Purpose:** Generate the initial Playwright automation suite.

**Prompt used:**

Do not search the web, GitHub, or external repositories.

Work only with the local Playwright project in the current folder.

Do not inspect external source code.
Do not fetch anything from the internet.

Create or update Playwright tests only inside the /tests folder based on the visible application behavior from this URL:
http://demo.baasic.com/angular/starterkit-photo-gallery/main

Create a small practical automation suite covering:
1. homepage load
2. gallery loading via scroll icon
3. search
4. login page UI
5. album creation UI flow
6. image upload UI flow
7. basic album management UI behavior

Keep the suite simple and realistic.
Use JavaScript.
Do not overengineer.
Also create a short README.md with run instructions.

---

## 2. Refinement Prompt

**Purpose:** Improve the existing test suite without rebuilding it from scratch.

**Prompt used:**

You are a Senior QA Automation Engineer working strictly inside the existing LOCAL Playwright project.

IMPORTANT:
- Do NOT use the internet
- Do NOT inspect GitHub or external repositories
- Do NOT fetch examples from outside this project
- Work only with the local files in the current folder
- Do NOT rebuild the suite from scratch

Current status:
The suite has already been refined once.
Current Chromium result is:
- 28 total tests
- 19 passing
- 9 failing

Your task now is to perform a SECOND REFINEMENT PASS.

Goals:
1. Keep all currently passing tests unchanged unless absolutely necessary
2. Focus ONLY on the remaining failing tests
3. Improve selectors, waits, and assertions
4. Preserve broad coverage for:
   - homepage
   - gallery
   - search
   - login
   - upload
   - album management
5. Do not reduce coverage aggressively
6. Do not add a large number of new tests
7. Do not delete working tests
8. Keep the suite realistic and submission-ready

What to improve specifically:
- Auth tests still fail on login form field and button visibility
- Gallery tests still fail around section reachability, image rendering, and clickable cards
- Homepage tests still fail around navigation/header visibility and photo presence

Refinement strategy:
- Prefer robust selectors over brittle CSS assumptions
- Add light waits only where needed
- Use guarded assertions when the UI is dynamic
- Prefer smoke-level validation over deep interaction if the UI is unstable
- If a feature is dynamic, validate route, visibility, or presence of a stable parent element instead of fragile low-level details

VERY IMPORTANT:
- Do NOT run tests in a loop
- Do NOT keep rerunning automatically
- First inspect the existing failing test files
- Then suggest code changes file by file
- Focus on fixing the remaining failing tests only

Keep what already works.
Improve only what is still unstable.

---

## 3. Short Follow-up Prompt

**Purpose:** Prevent unnecessary reruns and keep Claude focused.

**Prompt used:**

Do not run tests automatically. Only inspect the current failing files and propose code fixes.

---

## Prompt Strategy

The prompting process was iterative:
1. Generate an initial broader Playwright suite
2. Run the tests locally
3. Review the failing scenarios
4. Refine prompts based on actual failures
5. Improve stability without removing meaningful coverage

## Key Learnings

- AI was useful for generating the initial structure quickly
- Iterative prompting improved stability significantly
- Manual review was necessary to distinguish flaky tests from meaningful failures
- Human judgment was needed to keep the suite realistic and submission-ready