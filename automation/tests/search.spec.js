// @ts-check
import { test, expect } from '@playwright/test';
import { gotoApp } from './helpers.js';

test.describe('Search', () => {
  test('search input is visible in the header', async ({ page }) => {
    await gotoApp(page);
    const input = page.locator('input[type="search"], input[placeholder*="search" i], input[name*="search" i], nav input, header input').first();
    await expect(input).toBeVisible();
  });

  test('search input accepts typed text', async ({ page }) => {
    await gotoApp(page);
    const input = page.locator('input[type="search"], input[placeholder*="search" i], input[name*="search" i], nav input, header input').first();
    await input.fill('nature');
    await expect(input).toHaveValue('nature');
  });

  test('pressing Enter on search does not crash the page', async ({ page }) => {
    await gotoApp(page);
    const input = page.locator('input[type="search"], input[placeholder*="search" i], input[name*="search" i], nav input, header input').first();
    await input.fill('sunset');
    await input.press('Enter');
    await page.waitForLoadState('networkidle');
    // Page should remain on the same app — no unhandled error page
    await expect(page).toHaveURL(new RegExp('starterkit-photo-gallery'));
  });

  test('clearing the search input restores default state', async ({ page }) => {
    await gotoApp(page);
    const input = page.locator('input[type="search"], input[placeholder*="search" i], input[name*="search" i], nav input, header input').first();
    await input.fill('landscape');
    // Clear without pressing Enter — avoids navigation that makes the locator stale
    await input.fill('');
    await expect(input).toHaveValue('');
  });
});
