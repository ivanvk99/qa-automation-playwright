// @ts-check

export const BASE_URL = 'http://demo.baasic.com/angular/starterkit-photo-gallery/main';

// Demo credentials — replace with valid values to run authenticated flows
export const TEST_USER = {
  username: process.env.TEST_USERNAME || 'demo',
  password: process.env.TEST_PASSWORD || 'demo',
};

/**
 * Navigate to the app and wait for Angular to finish bootstrapping.
 * @param {import('@playwright/test').Page} page
 * @param {string} [hash] - optional hash route, e.g. '/#/login'
 */
export async function gotoApp(page, hash = '') {
  await page.goto(BASE_URL + hash);
  await page.waitForLoadState('networkidle');
  // Dismiss any ng-cloak / bootstrap spinner
  const spinner = page.locator('.loader, [class*="loader"], .ng-cloak');
  const count = await spinner.count();
  if (count > 0) {
    await spinner.first().waitFor({ state: 'hidden', timeout: 15000 }).catch(() => {});
  }
}

/**
 * Fill and submit the login form.
 * @param {import('@playwright/test').Page} page
 * @param {string} username
 * @param {string} password
 */
export async function login(page, username, password) {
  await gotoApp(page, '/#/login');
  await page.locator('input[type="email"], input[name="email"], input[type="text"]').first().fill(username);
  await page.locator('input[type="password"]').fill(password);
  await page.locator('button[type="submit"], input[type="submit"], button').filter({ hasText: /log\s*in|sign\s*in/i }).first().click();
  await page.waitForLoadState('networkidle');
}
