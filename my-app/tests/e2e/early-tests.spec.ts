import { test, expect } from '@playwright/test';

test('upon initial load has title', async({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Davideynon/);
});

test('upon initial load has banner page name', async({ page }) => {
  await page.goto('/');
  await expect(page.locator('#top-title-name')).toBeVisible();
});
