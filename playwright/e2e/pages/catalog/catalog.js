export class Catalog {
  constructor(page) {
    this.page = page;
    this.productCard = page.locator('div.product-card-inner');
    this.priceContainer = page.locator('div[data-plp-variant-picker-target="priceContainer"] p');
  }

  async getAffordableProducts() {
    const affordableProduct = [];
    const count = await this.productCard.count();

    for (let i = 0; i < count; i++) {
      const priceText = await this.productCard
        .nth(i)
        .locator(this.priceContainer.first())
        .innerText();
      const price = parseFloat(priceText.replace("$", ""));
      if (price <= 100) {
        affordableProduct.push(this.productCard.nth(i));
      }
    }
    return affordableProduct;
  }

  async selectRandomProduct(products) {
    if (products.length === 0) {
      throw new Error("No products found");
    }
    const randomIndex = Math.floor(Math.random() * products.length);
    await products[randomIndex].click();
  }
}
