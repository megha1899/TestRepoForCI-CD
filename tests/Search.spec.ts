// import { test, expect } from '@playwright/test';

// test.describe('Product Search', () => {

//   test('Search by Brand', async ({ page }) => {
//     await page.goto('https://contacts-qa.costco.com/');

//     const searchBox = page.getByRole('textbox', { name: 'Search' });

//     await expect(searchBox).toBeVisible();

//     await searchBox.fill('Biotrue');
//     await page.keyboard.press('Enter');

//     await expect(
//       page.getByRole('heading', { name: 'We found 5 results for "Biotrue"'})
//     ).toBeVisible();

//     await expect(page.locator('.product')).toHaveCount(5);
//   });

//   test('Search by Manufacturer', async ({ page }) => {
//     await page.goto('https://contacts-qa.costco.com/');

//     const searchBox = page.getByRole('textbox', { name: 'Search' });

//     await expect(searchBox).toBeVisible();

//     await searchBox.fill('CooperVision');
//     await page.keyboard.press('Enter');

//     await expect(
//       page.getByRole('heading', { name: 'We found 29 results for "CooperVision"' })
//     ).toBeVisible();

//     await expect(page.locator('.product').first()).toBeVisible();
//   });

//   test('Search by Lens Type', async ({ page }) => {
//     await page.goto('https://contacts-qa.costco.com/');

//     const searchBox = page.getByRole('textbox', { name: 'Search' });

//     await expect(searchBox).toBeVisible();

//     await searchBox.fill('Multifocal'); 
//     await page.keyboard.press('Enter');

//     await expect(
//       page.getByRole('heading', { name: 'We found 29 results for "Multifocal"' })
//     ).toBeVisible();

//     await expect(page.locator('.product').first()).toBeVisible();
//   });

// });
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByRole('button', { name: 'Search (Meta+k)' })).toBeVisible();
  await page.getByRole('button', { name: 'Search (Meta+k)' }).click();
  await expect(page.getByRole('button', { name: 'Search', exact: true })).toBeVisible();
  await page.getByRole('searchbox', { name: 'Search' }).click();
  await page.getByRole('searchbox', { name: 'Search' }).fill('Codegen');
  await expect(page.getByRole('link', { name: 'Running Codegen Generating' })).toBeVisible();
  await page.getByRole('link', { name: 'Running Codegen Generating' }).click();
  await expect(page.getByRole('heading', { name: 'Running CodegenDirect link to' })).toBeVisible();
});