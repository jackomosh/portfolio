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
    // Set a mobile viewport because the hamburger is hidden on desktop.
    await page.setViewportSize({ width: 390, height: 844 });

    // Load the portfolio page before interacting with the navbar.
    await page.goto(INDEX_PATH);

    // Open the mobile navigation menu.
    await page.locator('#nav-toggle').click();

    // Check that the navigation links are visible.
    await expect(page.locator('a[href="#about"]')).toBeVisible();

    // Check the remaining links if they exist in your navbar.
    await expect(page.locator('a[href="#home"]')).toBeVisible();
    await expect(page.locator('a[href="#portfolio"]')).toBeVisible();
    await expect(page.locator('a[href="#contact"]')).toBeVisible();
  });

});
