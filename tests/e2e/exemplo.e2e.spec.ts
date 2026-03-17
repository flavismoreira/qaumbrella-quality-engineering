import { test, expect } from '@playwright/test';

test('E2E: página tem título', async ({ page }) => {
  await page.goto('https://example.com/');
  await expect(page).toHaveTitle(/Example Domain/);
});
