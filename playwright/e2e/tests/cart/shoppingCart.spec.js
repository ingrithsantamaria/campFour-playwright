import { test } from "@playwright/test";
import { Home } from "../../pages/home/home";
import { ShoppingCart } from "../../pages/cart/shoppingCart";
test.describe("Add products to cart", () => {
  let homePage;
  let shoppingCart
  test.beforeEach(async ({ page }) => {
    homePage = new Home(page);
    shoppingCart = new ShoppingCart(page);
    await shoppingCart.navigate();
    await homePage.selectShopAll();
  });
  
  test("Add products to cart", { tag: "@e2e" }, async ({ page }) => {
    homePage = new Home(page);
    shoppingCart = new ShoppingCart(page);
    await homePage.selectProducts(99);
    await shoppingCart.selectAddToCart()
    await shoppingCart.selectCheckout();
  });
});
