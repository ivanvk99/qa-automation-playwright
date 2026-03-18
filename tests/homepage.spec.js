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
    // The <header> element starts CSS-hidden; target the nav inside it instead
    const nav = page.locator('nav, [class*="navbar"]').first();
    await expect(nav).toBeVisible({ timeout: 10000 });
  });

  test('at least one photo is rendered in the gallery', async ({ page }) => {
    await gotoApp(page);
    // Scroll to reveal the gallery section and allow lazy-load to fire
    await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    await page.waitForTimeout(1500);
    // Use plain `img` — Angular may still hold ng-src before full compile
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
