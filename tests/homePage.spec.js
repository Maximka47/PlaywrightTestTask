import { test, expect } from '@playwright/test';
import HomePage from '../pages/HomePage';

test('Verify homepage loads successfully', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.goTo();
    const title = await homePage.checkTitle();
    expect(title).toContain(homePage.title);

    const menuVisible = await homePage.isMenuVisible();
    expect(menuVisible).toBeTruthy();

});
