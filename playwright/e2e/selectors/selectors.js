export class Selectors {
    constructor(page) {
        this.shopAll = page.locator('a[href="/en/products"]');
        this.priceContainer = page.locator('div[data-plp-variant-picker-target="priceContainer"] p');
        this.productList = page.locator('div#products');
        this.productCard = page.locator('div.product-card-inner');
        this.productName = page.locator('h3.product-card-title');
        this.addShoppingCart = page.locator('button[name="button"]');
        this.cartItems = page.locator('#line-items');
        this.cardSideBar = page.locator('#slideover-cart');
        this.closeCartButton = page.locator('button[data-action="slideover#toggle"]');
        this.checkoutButton = page.locator('a[data-cart-target="checkoutButton"]');
    }
}