// import { test, expect } from '@playwright/test';

// test.describe('Product Filters', () => {

//   test('test', async ({ page }) => {
//         await page.goto('https://contacts-qa.costco.com/');
//         await expect(page.getByRole('navigation', { name: 'Main Navigation' })).toBeVisible();
      
//         await page.getByRole('button', { name: 'Shop' }).click();
//         await page.getByRole('link', { name: 'Shop All Contact Lenses' }).click();
//         await expect(page.getByRole('tabpanel', { name: 'of 4' })).toBeVisible();
      
//         await page.getByRole('link', { name: 'Shop All', description: 'Shop all products', exact: true }).click();
//         await expect(page.getByRole('heading', { name: 'Contacts' })).toBeVisible();
//       });

// //   test('Filter by Manufacturer', async ({ page }) => {
// //     await page.goto('https://contacts-qa.costco.com/');

// //     await page.getByRole('button', { name: 'Shop' }).click();
// //     await page.getByRole('link', { name: 'Manufacturer' }).click();
// //     await page.getByRole('link', { name: 'Alcon' }).click();

// //     await expect(
// //       page.getByRole('heading', { name: 'We found 28 results' })
// //     ).toBeVisible();

// //     await expect(page.getByText('Showing 1 - 28 of').first()).toBeVisible();
// //   });

// //   test('Filter by Lens Type', async ({ page }) => {
// //     await page.goto('https://contacts-qa.costco.com/');

// //     await page.getByRole('button', { name: 'Shop' }).click();
// //     await page.getByRole('link', { name: 'Lens Type' }).click();
// //     await page.getByRole('link', {
// //       name: 'Toric',
// //       description: 'Toric',
// //       exact: true,
// //     }).click();

// //     await expect(
// //       page.getByRole('heading', { name: 'We found 32 results' })
// //     ).toBeVisible();

// //     await expect(page.getByText('Showing 1 - 30 of').first()).toBeVisible();

// //     await page.getByRole('link', { name: 'next' }).click();
// //   });

// });
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByRole('link', { name: 'Get started' })).toBeVisible();
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toBeVisible();
  await page.getByRole('link', { name: 'Writing tests', exact: true }).click();
  await expect(page.getByRole('link', { name: 'GitHub repository' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Discord server' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Switch between dark and light' })).toBeVisible();
  await page.getByRole('link', { name: 'Setting up CI' }).click();
  await expect(page.getByRole('heading', { name: 'Setting up CI' })).toBeVisible();
  await page.getByRole('link', { name: 'Playwright logo Playwright' }).click();
  await expect(page.getByRole('heading', { name: 'Built for testing' })).toBeVisible();
  await page.getByRole('button', { name: 'Search (Meta+k)' }).click();
  await expect(page.getByRole('button', { name: 'Search', exact: true })).toBeVisible();
  await page.getByRole('searchbox', { name: 'Search' }).click();
  await page.getByRole('searchbox', { name: 'Search' }).fill('Agents');
  await expect(page.getByRole('link', { name: 'See all 4420 results' })).toBeVisible();
  await page.getByRole('link', { name: 'Coding agents', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Coding agents' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Core CommandsDirect link to' })).toBeVisible();
});