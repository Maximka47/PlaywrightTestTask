import { test, expect } from '@playwright/test';
import SearchPage from '../pages/SearchPage';

test('Search yields results for valid query', async ({ page }) => {
    const searchPage = new SearchPage(page);

    await searchPage.goTo();

    // Perform a search
    await searchPage.performSearch('Redmine');

    // Verify that results are shown
    const hasResults = await searchPage.hasResults();
    expect(hasResults).toBeTruthy();
});

test('Search displays message for no results', async ({ page }) => {
    const searchPage = new SearchPage(page);

    await searchPage.goTo();

    // Perform a search for an invalid query
    await searchPage.performSearch('invalidquery123');

    // Verify that "no results" message is displayed
    const noResultsMessage = await searchPage.getNoResultsMessage();
    expect(noResultsMessage).toContain('Results (0)');
});
