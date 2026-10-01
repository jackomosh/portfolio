
const { test, expect } = require('@playwright/test');

const BASE_URL = 'http://localhost:3000';

test.describe('Portfolio Website Tests', () => {
  test('index.html loads and has correct title', async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page).toHaveTitle(/Jack's Portfolio/);
  });

  test('Typed text animation element exists', async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page.locator('#typed-text')).toBeAttached();
  });

  test('404.html page loads correctly', async ({ page }) => {
    await page.goto(`${BASE_URL}/404.html`);
    await expect(page.locator('.error-heading')).toBeVisible();
  });

  test('Navigation menu links are functional', async ({ page }) => {
    // The hamburger menu is intended for mobile screens.
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(BASE_URL);

    await page.locator('#nav-toggle').click();

    // Verify the About link appears when the menu opens.
    await expect(page.locator('a[href="#about"]')).toBeVisible();
  });
});
