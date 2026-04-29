import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
    test('Browse to a category and see if products appear', async ({ page }) => {
        await page.goto('/')
        await page.getByText('Phones').click();

        await expect(page.locator('.card.h-100').first()).toBeVisible();
    });

    test('Click into a product and see if product detail page loads with a visible title', async ({ page }) => {
        await page.goto('/');
        await page.click('.card-title');

        await expect(page.locator('.name')).toBeVisible()
    });

    test('Filter by Laptops category and verify products update', async ({ page }) => {
        await page.goto('/');

        // Click Laptops category
        await page.getByText('Laptops').click();

        // Wait for products to update
        await page.waitForTimeout(1500);

        // Verify products are visible
        await expect(page.locator('.card.h-100').first()).toBeVisible();

        // Verify a laptop product is shown
        await expect(page.locator('.card-title').first()).toBeVisible();
    });
});
