import { test, expect } from '@playwright/test';

test.describe('Cart', () => {

    test.beforeEach(async ({ page }) => {
        // Login to account
        await page.goto('/');

        // Click product
        const productName = await page.locator('.card-title a').first().innerText();
        await page.locator('.card-title a').first().click();

        // Confirm alert appears and handle it
        page.on('dialog', async dialog => {
            expect(dialog.type()).toContain("alert");
            expect(dialog.message()).toContain("Product added.");
            await dialog.accept();
        });

        // Add to cart
        await page.click('.btn.btn-success.btn-lg');

        // Store on page object so tests can access it
        page.productName = productName;
    });

    test('Add a product to cart', async ({ page }) => {
        await expect(page.locator('.btn.btn-success.btn-lg')).toBeVisible();
    });

    test('View cart and verify product is there', async ({ page }) => {
        // Navigate to the cart
        await page.click('#cartur');

        // Wait for cart table
        await page.waitForSelector('tbody tr', { timeout: 10000 });
        
        // Assert product name is in the cart
        await expect(page.locator('tbody tr td').nth(1)).toHaveText(page.productName);
    });

});

