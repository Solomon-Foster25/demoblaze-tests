import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { TEST_USER } from '../test-data';

test.describe('Cart', () => {
    test('Add a product to cart', async ({ page }) => {
        // Login to account

        await page.goto('/');
        const loginPage = new LoginPage(page);
        await loginPage.login(TEST_USER.username, TEST_USER.password);

        // Click product

        await page.locator('.card-title a').first().click();

        // Confirm alert appears and handle it

        page.on('dialog', async dialog => {
            expect(dialog.type()).toContain("alert");
            expect(dialog.message()).toContain("Product added.");

            await dialog.accept();
        });

        // Add to cart

        await page.click('.btn.btn-success.btn-lg');
    });

});

test.describe('Cart', () => {
    test('View cart and verify product is there', async ({ page }) => {
        // Login to account

        await page.goto('/');
        const loginPage = new LoginPage(page);
        await loginPage.login(TEST_USER.username, TEST_USER.password);

        // Click product

        await page.locator('.card-title a').first().click();

        // Confirm alert appears and handle it

        page.on('dialog', async dialog => {
            expect(dialog.type()).toContain("alert");
            expect(dialog.message()).toContain("Product added.");
            await dialog.accept();
        });
        
        // Add to cart

        await page.click('.btn.btn-success.btn-lg');

        // Navigate to the cart

        await page.click('#cartur');

        // Assert product name is on the cart

        await expect(page.locator('.success').first()).toBeVisible();
    });
    
});