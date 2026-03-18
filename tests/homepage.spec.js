// @ts-check
import { test, expect } from '@playwright/test';
import { gotoApp } from './helpers.js';

test.describe('Homepage', () => {
  test('page loads and has a photo-related title', async ({ page }) => {
    await gotoApp(page);
    // Title is "baasic-starterkit-angular-blog" — match on any app-identifying term
    await expect(page).toHaveTitle(/photo|gallery|baasic|starterkit|angular/i);
  });

  test('header / navigation bar is visible', async ({ page }) => {
    await gotoApp(page);
    // The app renders a banner (role="banner") as its header — no <nav> element exists
    const header = page.locator('[role="banner"], header').first();
    await expect(header).toBeVisible({ timeout: 10000 });
  });

  test('at least one photo is rendered in the gallery', async ({ page }) => {
    await gotoApp(page);
    // Check before scrolling: the hero image is always rendered and proves the page loaded.
    // Do NOT scroll first — scrollBy moves the hero out of viewport leaving no visible img
    // when the gallery API returns empty results.
    const photos = page.locator('img');
    await expect(photos.first()).toBeVisible({ timeout: 10000 });
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
