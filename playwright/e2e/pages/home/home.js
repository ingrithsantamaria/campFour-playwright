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

  async selectProducts(targetPrice) {  
    let totalPrice = 0
    await this.page.waitForSelector(selectors.productCard)
    const productsCards = await this.page.$$(selectors.productCard)

    for(const productCard of productsCards) {
      const productName = await productCard.$(selectors.productName)
      const productNameText = await productName.innerText()

      const productPriceElement = await productCard.$(selectors.priceContainer)
      const productPriceText = await productPriceElement.innerText()
      const productPrice = parseFloat(productPriceText.replace("$", ""))

      console.log(`Producto: ${productNameText} - Precio: $${productPrice}`)

      if(totalPrice + productPrice <= targetPrice) {
        totalPrice += productPrice
        await this.page.click(selectors.wishedProduct)
        
        console.log(`Agregado a favoritos: ${productNameText}`)
      }else {
        console.log(`No se agregó a favoritos: ${productNameText}, Precio total: ${totalPrice}`)
      }
    }
  }
}
