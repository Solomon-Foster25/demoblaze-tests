import { test, expect } from '@playwright/test';

test('Login with username and password', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');
    await page.click('#login2');

    await page.fill('#loginusername', 'John S1');
    await page.fill('#loginpassword', 'Password');

    await page.click('#logInModal .btn-primary');
    
    await expect(page.locator('#nameofuser')).toHaveText('Welcome John S1')
});

test('Failed login with username and password', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');
    await page.click('#login2');

    await page.fill('#loginusername', 'obamamssdfd');
    await page.fill('#loginpassword', 'funko');

    page.on('dialog', async dialog => {
    expect(dialog.message()).toContain('User does not exist.');
    await dialog.dismiss();

    await page.click('#logInModal .btn-primary');
});

});