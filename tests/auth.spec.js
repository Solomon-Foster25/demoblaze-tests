import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { TEST_USER } from '../test-data';

test.describe('Authentication', () => {
    test('Login with username and password', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await page.goto('/');
        await loginPage.login(TEST_USER.username, TEST_USER.password);

        await expect(page.locator('#nameofuser')).toHaveText('Welcome ${TEST_USER.username}');
    });
    
});

test.describe('Authentication', () => {
    test('Failed login with username and password', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await page.goto('/');

        page.on('dialog', async dialog => {
            expect(dialog.message()).toContain('User does not exist.');
            await dialog.dismiss();
        });

        await loginPage.login('fakeuser123', 'wrongpassword');
    });

});