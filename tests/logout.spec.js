import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import LogoutPage from '../pages/LogoutPage';

test('User can log out successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const logoutPage = new LogoutPage(page);

    // Login first
    await loginPage.goTo();
    await loginPage.login('max22847', 'Max22847');

    // Perform logout
    await logoutPage.logout();

    // Verify successful logout
    const loggedOut = await logoutPage.isLoggedOut();
    expect(loggedOut).toBeTruthy();
});
