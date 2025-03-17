class SearchPage {
    constructor(page) {
        this.page = page;
        this.searchInput = '#search-input'; // Selector for the search bar
        this.searchButton = '[type=submit]'; // Selector for the search button
        this.resultContainer = '#search-results'; // Selector for the container with search results
        this.noResultsText = 'div[id="content"]>h3'; // Selector for "no results" message
    }

    async goTo() {
        await this.page.goto('https://www.redmine.org/projects/redmine/search?scope=all');
    }

    async performSearch(query) {
        await this.page.fill(this.searchInput, query);
        await this.page.click(this.searchButton);
    }

    async hasResults() {
        return await this.page.isVisible(this.resultContainer);
    }

    async getNoResultsMessage() {
        return await this.page.textContent(this.noResultsText);
    }
}
export default SearchPage;
