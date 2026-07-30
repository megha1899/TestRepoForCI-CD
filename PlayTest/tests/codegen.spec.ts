import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByRole('navigation', { name: 'Main' })).toBeVisible();

  await page.getByRole('link', { name: 'Playwright logo Playwright' }).click();
  await page.getByRole('heading', { name: 'Playwright enables reliable' }).click();
  await page.getByRole('link', { name: 'Get started' }).click();
//   await expect(page.getByRole('navigation', { name: 'Docs sidebar' })).toBeVisible();

  await page.getByRole('link', { name: 'Playwright logo Playwright' }).click();
  await expect(page.getByRole('link', { name: 'Star microsoft/playwright on' })).toBeVisible();

  await page.getByRole('img', { name: 'Chromium, Firefox, WebKit' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('div').filter({ hasText: 'Chosen by companies and open' }).nth(4).click();
  const page1 = await page1Promise;
  await expect(page.locator('div').filter({ hasText: 'Chosen by companies and open' }).nth(4)).toBeVisible();
  await page.getByRole('button', { name: 'Search (Meta+k)' }).click();
  await expect(page.getByRole('button', { name: 'Search', exact: true })).toBeVisible();

  await page.getByRole('searchbox', { name: 'Search' }).click();
  await page.getByRole('searchbox', { name: 'Search' }).fill('codegen');
 //await expect(page.getByRole('link', { name: 'See all 6869 results' })).toBeVisible();

  await page.getByRole('link', { name: 'Running Codegen Generating' }).click();
  await expect(page.getByRole('heading', { name: 'Running CodegenDirect link to' })).toBeVisible();
});
