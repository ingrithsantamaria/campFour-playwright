import { selectors } from "../../selectors/registerSelectors";
import { data } from "../../data/data";
export class RegisterUser {
  constructor(page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto("/");
  }

  async openLogin() {
    const userAgent = await this.page.evaluate(() => navigator.userAgent);
    const isMobile = /Mobi|Android/i.test(userAgent)
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
    await this.page.fill(selectors.emailInput, data.email);
    await this.page.fill(selectors.passwordInput,data.password);
    await this.page.fill(selectors.repeatPassword, data.password);
  }

  async fillFormWithExistingEmail() {
    await this.page.fill(selectors.emailInput, 'ingrith.santamaria@applydigital.com');
    await this.page.fill(selectors.passwordInput, data.password);
    await this.page.fill(selectors.repeatPassword, data.password);
  }

  async signUp() {
    await this.page.click(selectors.submit);
  }

  async mailExists() {
    await this.page.waitForSelector(selectors.errorExplanation);
    return await this.page.isVisible(selectors.errorExplanation);
  }
}
