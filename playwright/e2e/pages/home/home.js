import { data } from "../../data/data";
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
    await this.page.fill(selectors.passwordInput, data.password);
  }

  async selectShopAll() {
    await this.page.click(selectors.shopAll);
    return await this.page.waitForURL("/en/products");
  }

  async selectProducts(condition) {
    let totalPrice = 0;
    const products = await this.page.$$(selectors.productList);

    for (const product of products) {
      const priceText = await product.$eval(
        selectors.priceContainer,
        (el) => el.textContent
      );
      const price = parseFloat(priceText.replace("$", ""));
      totalPrice += price;

      const meetsCondition =
        (condition === "less" && totalPrice < 100) ||
        (condition === "equal" && totalPrice === 100) ||
        (condition === "greater" && totalPrice > 100);

      if (meetsCondition) {
        await product.click(selectors.wishedProduct);
        if (condition === "equal" || condition === "greater") break;
      }
    }
    console.log(`Finalizado. Total de precios acumulados: $${totalPrice}`);
  }
}
