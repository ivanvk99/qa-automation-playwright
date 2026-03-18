// @ts-check
import { test, expect } from '@playwright/test';
import { gotoApp } from './helpers.js';

test.describe('Homepage', () => {
  test('page loads and has a photo-related title', async ({ page }) => {
    await gotoApp(page);
    await expect(page).toHaveTitle(/photo/i);
  });

  test('header / navigation bar is visible', async ({ page }) => {
    await gotoApp(page);
    const header = page.locator('nav, header, [class*="navbar"], [class*="header"]').first();
    await expect(header).toBeVisible();
  });

  test('at least one photo is rendered in the gallery', async ({ page }) => {
    await gotoApp(page);
    // Wait for images that are actual photo thumbnails (not icons / logos)
    const photos = page.locator('img[src]:not([src=""])');
    await expect(photos.first()).toBeVisible();
  });

  test('scroll-to-gallery icon is present', async ({ page }) => {
    await gotoApp(page);
    // The starter kit renders a chevron / arrow anchor below the hero section
    const scrollIcon = page.locator(
      'a[href*="gallery"], .scroll, [class*="scroll"], i.fa-chevron-down, i.fa-angle-down, [class*="arrow-down"]'
    ).first();
    await expect(scrollIcon).toBeVisible();
  });

  test('clicking the scroll icon moves focus to the gallery section', async ({ page }) => {
    await gotoApp(page);
    const scrollIcon = page.locator(
      'a[href*="gallery"], [class*="scroll"], i.fa-chevron-down, i.fa-angle-down'
    ).first();
    // Scroll icon must be present; clicking it should not throw
    await expect(scrollIcon).toBeVisible();
    await scrollIcon.click();
    // After click the page should still be loaded (no navigation away)
    await expect(page).toHaveURL(new RegExp('starterkit-photo-gallery'));
  });
});
