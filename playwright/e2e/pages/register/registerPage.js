import { faker } from "@faker-js/faker";
export class RegisterUser {
  constructor(page) {
    this.page = page;
    this.hamburgerMenu = 'button[data-toggle-menu-target="button"]'
    this.iconUserMobile = 'button#mobile-menu'
    this.iconUser = 'button[data-action="click->slideover-account#toggle click@window->slideover-account#hide click->toggle-menu#hide touch->toggle-menu#hide"]'
    this.emailInput = "input#user_email";
    this.passwordInput = "input#user_password";
    this.repeatPassword = "input#user_password_confirmation";
    this.signUpButton = 'div a[href="/user/sign_up"]';
    this.submit = 'input[type="submit"]';
  }

  async navigate() {
    await this.page.goto("https://demo.spreecommerce.org");
  }

  async openLogin() {
    const isMobile = this.page.viewportSize().width < 768
    if(isMobile) {
      await this.page.click(this.hamburgerMenu)
      await this.page.click(this.iconUserMobile)
    }else{
      await this.page.click(this.iconUser);
    }
  }

  async selectSignUp() {
    await this.page.click(this.signUpButton);
    await this.page.waitForSelector(this.repeatPassword)
  }

  async fillForm() {
    const password = faker.internet.password(10, true);
    const email = faker.internet.email();
    await this.page.fill(this.emailInput, email);
    await this.page.fill(this.passwordInput, password);
    await this.page.fill(this.repeatPassword, password);
  }

  async signUp() {
    await this.page.click(this.submit);
  }
}
