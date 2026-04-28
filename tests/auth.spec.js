import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login with username and password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await page.goto('/');
    await loginPage.login('John S1', 'Password');

    await expect(page.locator('#nameofuser')).toHaveText('Welcome John S1');
});

test('Failed login with username and password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await page.goto('/');

    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('User does not exist.');
        await dialog.dismiss();
    });

    await loginPage.login('fakeuser123', 'wrongpassword');
});