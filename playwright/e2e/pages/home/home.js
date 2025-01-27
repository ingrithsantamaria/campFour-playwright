import { data, urls } from "../../data/data";
import { selectors } from "../../selectors/registerSelectors";
export class Home {
  constructor(page) {
    this.page = page;
    this.bandSuccessful = "div.p-2";
  }
  async isOnHomePage() {
    await this.page.waitForSelector(this.bandSuccessful);
    return await this.page.isVisible(this.bandSuccessful);
  }
  async fillLogin() {
    await this.page.fill(selectors.emailInput, data.newEmail);
    await this.page.fill(selectors.passwordInput,data.newPassword);
  }

  async selectShopAll() {
    await this.page.click('text="Shop All"')
  }
}
