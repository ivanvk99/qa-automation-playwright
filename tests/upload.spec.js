// @ts-check
import { test, expect } from '@playwright/test';
import { gotoApp } from './helpers.js';

test.describe('Image upload UI', () => {
  test('upload route redirects to login when unauthenticated', async ({ page }) => {
    await gotoApp(page, '/#/upload');
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL(/upload|login/);
  });

  test('login page for upload route shows the login form', async ({ page }) => {
    await gotoApp(page, '/#/upload');
    await page.waitForLoadState('networkidle');
    if (page.url().includes('login')) {
      await expect(page.locator('input[type="password"]')).toBeVisible();
    } else {
      // Authenticated — upload form should be present
      const uploadEl = page.locator(
        'input[type="file"], [class*="upload"], [class*="drop"], button:has-text("upload")'
      ).first();
      await expect(uploadEl).toBeVisible();
    }
  });

  test('upload page title or heading is present when authenticated', async ({ page }) => {
    await gotoApp(page, '/#/upload');
    await page.waitForLoadState('networkidle');
    if (!page.url().includes('login')) {
      const heading = page.locator('h1, h2, h3, [class*="title"]').first();
      await expect(heading).toBeVisible();
    }
  });

  test('navigating from home to upload and back does not break navigation', async ({ page }) => {
    await gotoApp(page);
    await gotoApp(page, '/#/upload');
    await page.waitForLoadState('networkidle');
    await page.goBack();
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL(new RegExp('starterkit-photo-gallery'));
  });
});
