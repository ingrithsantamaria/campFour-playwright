export class Home {
  constructor(page) {
    this.page = page;
    this.shopAll = page.locator('a[href="/en/products"]');
    
  }

  async navigate() {
    await this.page.goto("/");
  }

  async selectShopAll() {
    await this.shopAll.first().click()
    return await this.page.waitForURL("/en/products");
  }
}
