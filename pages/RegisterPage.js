class RegisterPage {
    constructor(page) {
        this.page = page;
        this.registerButton = '.register'; // Selector for the register button link on the home page
        this.usernameField = '#user_login';
        this.passwordField = '#user_password';
        this.confirmPasswordField = '#user_password_confirmation';
        this.emailField = '#user_mail';
        this.submitButton = '[name=commit]';
    }

    async goTo() {
        await this.page.goto('https://www.redmine.org/');
        await this.page.click(this.registerButton);
    }

    async register(username, password, email) {
        await this.page.fill(this.usernameField, username);
        await this.page.fill(this.passwordField, password);
        await this.page.fill(this.confirmPasswordField, password);
        await this.page.fill(this.emailField, email);
        await this.page.click(this.submitButton);
    }

    async isRegistrationSuccessful() {
        return await this.page.isVisible('.flash_notice'); // Success message selector
    }

    async getErrorMessage() {
        return await this.page.isVisible('#errorExplanation'); //Error message selector
    }
}
export default RegisterPage;
