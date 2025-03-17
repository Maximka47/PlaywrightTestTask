class LogoutPage {
    constructor(page) {
        this.page = page;
        this.logoutButton = '.logout'; // Selector for the logout button
    }

    async logout() {
        await this.page.click(this.logoutButton);
    }

    async isLoggedOut() {
        return await this.page.isVisible('.login'); // Login button visible again
    }
}
export default LogoutPage;
