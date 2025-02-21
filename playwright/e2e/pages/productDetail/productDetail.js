export class ProductDetail {
  constructor(page) {
    this.page = page;
    this.addShoppingCart = page.locator('div[data-sticky-button-target="stickyButton"]');
    this.cardSideBar = page.locator("#slideover-cart");
    this.cartSidebarClose = page.locator(
      'button[data-action="slideover#toggle"]'
    );
  }

  async addToCart() {
    await this.addShoppingCart.first().waitFor({ state: "attached" });
    await this.addShoppingCart.first().click()
  }

  async closeCartSidebar() {
    if (await this.cardSideBar.isVisible()) {
      await this.cartSidebarClose.click();
    }
  }
}
