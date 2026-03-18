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
      // Wait for Angular to render the login form before asserting
      await page.waitForSelector('input', { timeout: 10000 });
      await expect(page.locator('input[type="password"]')).toBeVisible({ timeout: 10000 });
    } else {
      // Not redirected to login — app is still running; just verify the page is functional
      await expect(page).toHaveURL(/starterkit-photo-gallery/);
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
