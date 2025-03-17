

class HomePage {
    constructor(page) {
        this.page = page;
        this.title = 'Overview - Redmine';
        this.menu = '#main-menu'

    }

    async goTo() {
        await this.page.goto('https://www.redmine.org/');
    }

    async checkTitle() {
        return await this.page.title();
    }

    async isMenuVisible() {
        return await this.page.isVisible(this.menu);
    }

}
export default HomePage;
