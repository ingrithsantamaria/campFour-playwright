export class ProductDetail {
  constructor(page) {
    this.page = page;
    this.addShoppingCart = page.locator('button[name="button"]');
    this.cardSideBar = page.locator("#slideover-cart");
    this.cartSidebarClose = page.locator(
      'button[data-action="slideover#toggle"]'
    );
  }

  async addToCart() {
    await this.page.click(this.addShoppingCart);
  }

  async closeCartSidebar() {
    if (await this.page.isVisible(this.cartSidebarClose)) {
      await this.page.click(this.cartSidebarClose);
    }
  }
}
