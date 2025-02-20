import { selectors } from "../../selectors/selectors";
export class Home {
  constructor(page) {
    this.page = page;
  }

  async selectShopAll() {
    await this.page.click(selectors.shopAll);
    return await this.page.waitForURL("/en/products");
  }
}
