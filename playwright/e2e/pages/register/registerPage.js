import { faker } from "@faker-js/faker";
import { selectors } from "../../selectors/registerSelectors";
export class RegisterUser {
  constructor(page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto("https://demo.spreecommerce.org");
  }

  async openLogin() {
    const isMobile = this.page.viewportSize().width < 768
    if(isMobile) {
      await this.page.click(selectors.hamburgerMenu)
      await this.page.click(selectors.iconUserMobile)
    }else{
      await this.page.click(selectors.iconUser);
    }
  }

  async selectSignUp() {
    await this.page.click(selectors.signUpButton);
    await this.page.waitForSelector(selectors.repeatPassword)
  }

  async fillForm() {
    const password = faker.internet.password(10, true);
    const email = faker.internet.email();
    await this.page.fill(selectors.emailInput, email);
    await this.page.fill(selectors.passwordInput, password);
    await this.page.fill(selectors.repeatPassword, password);
  }

  async signUp() {
    await this.page.click(selectors.submit);
  }
}
