export class ShoppingCart {
  constructor(page) {
    this.page = page;
    this.cartItems = page.locator('#line-items');
  }

  async getCratItems() {

    return await this.cartItems.count();
  }
}
