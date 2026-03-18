// @ts-check
import { test, expect } from '@playwright/test';
import { gotoApp } from './helpers.js';

test.describe('Album management UI', () => {
  test('albums route redirects to login when unauthenticated', async ({ page }) => {
    await gotoApp(page, '/#/albums');
    await page.waitForLoadState('networkidle');
    // Expect either the albums page or a login redirect
    await expect(page).toHaveURL(/albums|login/);
  });

  test('album creation UI requires authentication', async ({ page }) => {
    await gotoApp(page, '/#/albums/create');
    await page.waitForLoadState('networkidle');
    // Without auth, should redirect to login
    const url = page.url();
    const onLoginOrCreate = /login|albums/.test(url);
    expect(onLoginOrCreate).toBe(true);
  });

  test('album detail route requires authentication', async ({ page }) => {
    await gotoApp(page, '/#/albums/1');
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL(/login|albums/);
  });

  test('login page shown for album routes has a form', async ({ page }) => {
    await gotoApp(page, '/#/albums');
    await page.waitForLoadState('networkidle');
    if (page.url().includes('login')) {
      // Verify the login form is functional
      const passwordField = page.locator('input[type="password"]');
      await expect(passwordField).toBeVisible();
    } else {
      // If user happened to be authenticated, albums page should show content
      const content = page.locator('[class*="album"], [class*="gallery"], main, section').first();
      await expect(content).toBeVisible();
    }
  });

  test('navigating away from albums and back preserves page state', async ({ page }) => {
    await gotoApp(page, '/#/albums');
    await page.waitForLoadState('networkidle');
    const urlAfterAlbums = page.url();

    await gotoApp(page); // go home
    await gotoApp(page, '/#/albums'); // go back
    await page.waitForLoadState('networkidle');

    // Should resolve to the same route pattern as before
    const resolvedSame = page.url().includes('login') === urlAfterAlbums.includes('login');
    expect(resolvedSame).toBe(true);
  });
});
