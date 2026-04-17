import { test, expect } from '@playwright/test';

test('Add a product to cart', async ({ page }) => {
    // Go to main page and click login

    await page.goto('https://www.demoblaze.com/index.html');
    await page.click('#login2');

    // Login to account

    await page.fill('#loginusername', 'John S1');
    await page.fill('#loginpassword', 'Password');
    await page.click('#logInModal .btn-primary');

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

test('View cart and verify product is there', async ({ page }) => {
    // Go to main page and click login

    await page.goto('https://www.demoblaze.com/index.html');
    await page.click('#login2');

    // Login to account

    await page.fill('#loginusername', 'John S1');
    await page.fill('#loginpassword', 'Password');
    await page.click('#logInModal .btn-primary');

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