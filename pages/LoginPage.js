export class LoginPage {
    constructor(page) {
        this.page = page;
        this.loginButton = '#login2';
        this.usernameInput = '#loginusername';
        this.passwordInput = '#loginpassword';
        this.submitButton = '#logInModal .btn-primary';
        this.welcomeText = '#nameofuser';
    }

    async login(username, password) {
        await this.page.click(this.loginButton);
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.submitButton);
    }
}