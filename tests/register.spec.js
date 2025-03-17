import { test, expect } from '@playwright/test';
import RegisterPage from '../pages/RegisterPage';

test('User gets error message  on un successful register', async ({ page }) => {
    const registerPage = new RegisterPage(page);

    // Go to registration page and perform registration
    await registerPage.goTo();
    await registerPage.register('newuser123', 'password123', 'testemail@example.com'); // Use valid test data

    // Verify successful registration
    const success = await registerPage.isRegistrationSuccessful();
    const failure = await registerPage.getErrorMessage();
    expect(success).toBeFalsy();
    expect(failure).toBeTruthy();
});
