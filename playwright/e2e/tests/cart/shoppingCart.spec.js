import { test } from "@playwright/test";
import { RegisterUser } from "../../pages/register/registerPage";
import { Home } from "../../pages/home/home";
import { ShoppingCart } from "../../pages/cart/shoppingCart";
import { Whitelist } from "../../pages/whitelist/whitelist";
test.describe("Add products to cart", () => {
  let registerPage;
  let homePage;
  let shoppingCart
  let whitelist
  test.beforeEach(async ({ page }) => {
    registerPage = new RegisterUser(page);
    homePage = new Home(page);
    await registerPage.navigate();
    // await registerPage.openLogin();
    // await registerPage.selectSignUp();
    // await registerPage.fillForm();
    // await registerPage.signUp();
    await homePage.selectShopAll();
  });
  
  test("Add products to cart", { tag: "@e2e" }, async ({ page }) => {
    homePage = new Home(page);
    shoppingCart = new ShoppingCart(page);
    whitelist = new Whitelist(page);
    await homePage.selectProducts(99);
    //await homePage.selectFavoriteIcon();
    //await whitelist.isOnWhitelistPage()
    await shoppingCart.selectAddToCart()
    await shoppingCart.selectCheckout();
  });
});
