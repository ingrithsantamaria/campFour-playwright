import { test, expect } from "@playwright/test";
import { Home } from "../../pages/home/home";
import { ShoppingCart } from "../../pages/cart/shoppingCart";
import { Catalog } from "../../pages/catalog/catalog";
import { ProductDetail } from "../../pages/productDetail/productDetail";


test('Add products to cart', {tag: '@e2e'}, async ({ page }) => {
    const homePage = new Home(page);
    const catalog = new Catalog(page);
    const productDetail = new ProductDetail(page);
    const shoppingCart = new ShoppingCart(page);

    for (let i = 0; i < 1; i++) {
        await homePage.navigate()
        await homePage.selectShopAll();

        const affordableProducts = await catalog.getAffordableProducts();

        await catalog.selectRandomProduct(affordableProducts);

        await productDetail.addToCart();
        await expect(productDetail.cartSidebarClose).toBeVisible();

        await productDetail.closeCartSidebar();

        await page.goBack();


    }

    const cartItems = await shoppingCart.getCratItems();
    expect(cartItems).toBe(1);
})

