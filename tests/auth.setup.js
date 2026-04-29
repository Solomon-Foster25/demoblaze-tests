import { test as setup } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { TEST_USER } from '../test-data';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
    await page.goto('/');
    const loginPage = new LoginPage(page);
    await loginPage.login(TEST_USER.username, TEST_USER.password);

    await page.waitForSelector('#nameofuser');

    // Save auth state to file
    await page.context().storageState({ path: authFile });
});