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
    await this.page.fill(selectors.passwordInput, data.newPassword);
  }

  async selectShopAll() {
    await this.page.click(selectors.shopAll);
  }

  async selectProducts(options) {
    const {priceLimit, matchExact, exceedLimit} = options
    const products = await this.page.$$(selectors.priceContainer)
    let total = 0
    let lastAddedIndex = -1

    for (let i = 0; i < products.length; i++) {
      const priceText = await products[i].innerText()
      const price = parseFloat(priceText.replace('$', ''))
      let newTotal = total + price

      if (matchExact && newTotal === priceLimit || !matchExact && newTotal <= priceLimit || exceedLimit && newTotal > priceLimit) {
        total = newTotal
        lastAddedIndex = i
        const favoriteButton = await this.page.$$(`${selectors.wishedProduct}:nth-of-type(${i + 1})`)
        await favoriteButton[0].click()

        if(matchExact || exceedLimit) break
      }
    }

    if (exceedLimit && total <= priceLimit && lastAddedIndex + 1 < products.length) {
      const nextIndex = lastAddedIndex + 1
      const favoriteButton = await this.page.$$(`${selectors.wishedProduct}:nth-of-type(${nextIndex + 1})`)
      await favoriteButton[0].click()
    }
  }
}
