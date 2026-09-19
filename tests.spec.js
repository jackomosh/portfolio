const { test, expect } = require('@playwright/test');
const path = require('path');

// test.use({ channel: 'chrome' });

const INDEX_PATH = `file://${path.resolve('index.html')}`;
const NOT_FOUND_PATH = `file://${path.resolve('404.html')}`;

test.describe('Portfolio Website Tests', () => {

  test('index.html loads and has correct title', async ({ page }) => {
    await page.goto(INDEX_PATH);
    await expect(page).toHaveTitle(/Jack's Portfolio/);
  });

  test('Typed text animation element exists', async ({ page }) => {
    await page.goto(INDEX_PATH);
    const typedText = page.locator('#typed-text');
    await expect(typedText).toBeAttached();
  });

  test('404.html page loads correctly', async ({ page }) => {
    await page.goto(NOT_FOUND_PATH);
    const heading = page.locator('.error-heading');
    await expect(heading).toBeVisible();
  });

  test('Navigation menu links are functional', async ({ page }) => {
    await page.goto(INDEX_PATH);

    // Click the nav toggle button to open the menu
    await page.locator('#nav-toggle').click();

    // Assert that the about link is now visible
    const aboutLink = page.locator('a[href="#about"]');
    await expect(aboutLink).toBeVisible();
  });

});