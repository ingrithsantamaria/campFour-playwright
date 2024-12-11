export class RegisterUser {
  constructor(page) {
    this.page = page;
    this.userIcon = 'div.hidden lg:flex'
    this.emailInput = 'input#user_email'
    this.passwordInput = 'input#user_password'
    this.repeatPassword = 'input#user_password_confirmation'
    this.signUpButton = 'div a[href="/user/sign_up"'
    this.submit = 'input[type="submit"]'
  }
  async navigate() {
    await this.page.goto("https://demo.spreecommerce.org")
  }
  async selectUserIcon() {
    await this.page.click(this.userIcon)
  }
}
