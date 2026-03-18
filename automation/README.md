# Photo Gallery — Playwright Test Suite

Automated UI tests for the [Baasic Angular Photo Gallery](http://demo.baasic.com/angular/starterkit-photo-gallery/main) demo application.

## Requirements

- Node.js 18+
- npm

## Setup

```bash
npm install
npx playwright install chromium
```

## Running the tests

```bash
# All tests
npx playwright test

# Single spec file
npx playwright test tests/homepage.spec.js

# Open the HTML report after a run
npx playwright show-report
```

## Test coverage

| File | What it covers |
|---|---|
| `tests/homepage.spec.js` | Page title, header/nav, photo grid visible, scroll-to-gallery icon |
| `tests/gallery.spec.js` | Gallery visible after scroll, multiple photos rendered, card links |
| `tests/search.spec.js` | Search input visible, accepts text, Enter key, clear |
| `tests/auth.spec.js` | Login page UI — fields, submit button, empty-form validation |
| `tests/albums.spec.js` | Albums route redirects unauthenticated users; basic management flow |
| `tests/upload.spec.js` | Upload route redirects unauthenticated users; upload UI when authed |

## Authenticated flows

Provide credentials via environment variables to exercise the album and upload flows with a real account:

```bash
TEST_USERNAME=youruser TEST_PASSWORD=yourpass npx playwright test
```

Without credentials, the suite uses `demo / demo` and tests gracefully branch on whether the login succeeds.

## Notes

- The app is an Angular SPA; all navigation helpers wait for `networkidle` to let the bootstrap spinner clear.
- Test timeout is set to 45 s to account for the remote demo server.
- Screenshots on failure are saved automatically to `test-results/`.
