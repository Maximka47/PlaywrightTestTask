import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';

test('User can login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Go to login page
    await loginPage.goTo();

    // Perform login with valid credentials
    await loginPage.login('max22847', 'Max22847'); // Use valid test credentials here

    // Verify successful login
    const loggedMessageCheck = await loginPage.getFlashMessageContent();
    expect(loggedMessageCheck).toContain('Logged in as ')

});
