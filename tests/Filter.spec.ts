import { test, expect } from '@playwright/test';

test.describe('Product Filters', () => {

  test('Filter by Shop All Contact Lenses', async ({ page }) => {
    await page.goto('https://contacts-qa.costco.com/');

    await expect(
      page.getByRole('navigation', { name: 'Main Navigation' })
    ).toBeVisible();
    await page.getByRole('button', { name: 'Shop' }).hover();
    //await page.getByRole('button', { name: 'Shop All Contact Lenses'}).hover();
    await page.getByRole('button', { name: 'Shop' }).click();

    await expect(
      page.getByRole('link', {
        name: 'Shop All',
        description: 'Shop all products',
        exact: true,
      })
    ).toBeVisible();

    await page.getByRole('link', { name: 'Shop All Contact Lenses' }).click();
    await page.getByRole('link', {
      name: 'Shop All',
      description: 'Shop all products',
      exact: true,
    }).click();

    await expect(page.getByRole('heading', { name: 'Contacts' })).toBeVisible();
    await expect(page.getByText('Showing 1 - 30 of').first()).toBeVisible();
  });

  test('Filter by Manufacturer', async ({ page }) => {
    await page.goto('https://contacts-qa.costco.com/');

    await page.getByRole('button', { name: 'Shop' }).click();
    await page.getByRole('link', { name: 'Manufacturer' }).click();
    await page.getByRole('link', { name: 'Alcon' }).click();

    await expect(
      page.getByRole('heading', { name: 'We found 28 results' })
    ).toBeVisible();

    await expect(page.getByText('Showing 1 - 28 of').first()).toBeVisible();
  });

  test('Filter by Lens Type', async ({ page }) => {
    await page.goto('https://contacts-qa.costco.com/');

    await page.getByRole('button', { name: 'Shop' }).click();
    await page.getByRole('link', { name: 'Lens Type' }).click();
    await page.getByRole('link', {
      name: 'Toric',
      description: 'Toric',
      exact: true,
    }).click();

    await expect(
      page.getByRole('heading', { name: 'We found 32 results' })
    ).toBeVisible();

    await expect(page.getByText('Showing 1 - 30 of').first()).toBeVisible();

    await page.getByRole('link', { name: 'next' }).click();
  });

});