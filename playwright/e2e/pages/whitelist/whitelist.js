import { selectors } from "../../selectors/registerSelectors";
export class Whitelist {

  async isOnWhitelistPage() {
    await this.page.waitForSelector(selectors.favoriteList);
    return await this.page.isVisible(this.favoriteList);
  }
}
