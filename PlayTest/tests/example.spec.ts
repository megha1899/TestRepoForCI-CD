import { test, expect } from '@playwright/test';
import { link } from 'node:fs';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
//  await page.getByText('PlaywrightDocsMCPCLIAPINode.').isVisible();
  console.log("My First Test")

  // Expect a title "to contain" a substring.( these are the locator)
 // await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link. (these are locator where we are clicking on it)
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('hover over Playwright Test text', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await page.hover('text=Playwright Test');
});
test('focus Built for AI agents text', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await page.focus('text=Built for AI agents');
});

test('validated search box', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByRole('navigation', { name: 'Main' })).toBeVisible();
 
  await page.getByRole('button', { name: 'Search (Meta+k)' }).click();
  await page.getByRole('searchbox', { name: 'Search' }).fill('Assert ');
  await expect(page.getByRole('button', { name: 'Search', exact: true })).toBeVisible();

  await page.getByRole('link', { name: 'Assert all text in a list' }).click();
  await expect(page.getByRole('heading', { name: 'Assert all text in a' })).toBeVisible();
});

//trace viewer - a GUI tool that lets you explore recorded Playwright traces of your tests
// test.only('focus this test', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   await page.getByRole('link', { name: 'CLI documentation' }).click();
//   await expect(page.getByRole('heading', { name: 'Coding agents' })).toBeVisible();
// });
// test.skip('skip this test', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   await page.getByRole('link', { name:'Testing documentation' }).click();
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

//skip certain test based on the condition
test('skip this test', async ({ page, browserName }) => {
  test.skip(browserName === 'firefox', 'Still working on it');
});

// you tag your test by using different tag which is easy o search @report @slow --> npx playwright test --grep @fast

test.describe('group', {
  tag: '@report',
}, () => {
  test('test report header', async ({ page }) => {
    // ...
  });

  test('test full report', {
    tag: ['@slow', '@vrt'],
  }, async ({ page }) => {
    // ...
  });
//define the `viewport` for that device. same work in spec file 
  test.use({
    viewport: { width: 1600, height: 1200 },
  });

});
