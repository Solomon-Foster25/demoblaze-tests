import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
    test('Browse to a category and see if products appear', async ({ page }) => {
        await page.goto('https://www.demoblaze.com/index.html')
        await page.getByText('Phones').click();

        await expect(page.locator('.card.h-100').first()).toBeVisible();
    });

});

test.describe('Navigation', () => {
    test('Click into a product and see if product detail page loads with a visible title', async ({ page }) => {
        await page.goto('https://www.demoblaze.com/index.html');
        await page.click('.card-title');

        await expect(page.locator('.name')).toBeVisible()
    });

});