

class LoginPage {
    constructor(page) {
        this.page = page;
        this.loginButton = '.login';
        this.usernameField = '#username';
        this.passwordField = '#password';
        this.submitButton = '[name=login]';
        this.loggedMessage = '#loggedas';
    }

    async goTo() {
        await this.page.goto('https://www.redmine.org/');
        await this.page.click(this.loginButton);
    }

    async login(username, password) {
        await this.page.fill(this.usernameField, username);
        await this.page.fill(this.passwordField, password);
        await this.page.click(this.submitButton);
    }

    async getFlashMessageContent() {
        return await this.page.textContent(this.loggedMessage);
    }

}
export default LoginPage;
