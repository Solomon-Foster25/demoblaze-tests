import { test, expect } from '@playwright/test';

test.describe('Checkout', () => {

    test('Place an order successfully', async ({ page }) => {
        // Login and add a product to cart
        await page.goto('/');
        await page.locator('.card-title a').first().click();

        page.on('dialog', async dialog => {
            await dialog.accept();
        });

        // Navigate to cart
        await page.click('.btn.btn-success.btn-lg');
        await page.click('#cartur');
        await page.waitForSelector('tbody tr', { timeout: 10000 });

        // Open place order modal
        await page.click('.btn.btn-success');

        // Fill in order form
        await page.fill('#name', 'John Test');
        await page.fill('#country', 'United Kingdom');
        await page.fill('#city', 'London');
        await page.fill('#card', '1234567890123456');
        await page.fill('#month', '12');
        await page.fill('#year', '2026');

        // Submit order
        await page.click('#orderModal .btn-primary');

        // Verify confirmation
        await expect(page.locator('.sweet-alert h2')).toHaveText('Thank you for your purchase!');
    });

});