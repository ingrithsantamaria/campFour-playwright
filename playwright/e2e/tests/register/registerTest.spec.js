import { test } from "@playwright/test";
import { RegisterUser } from "../../pages/register/registerPage";
import { Home } from "../../pages/home/home";
test.describe("User registration",{tag: '@smoke'}, () => {
  test("Create a user with valid data", async ({ page }) => {
    const registerPage = new RegisterUser(page);
    const home = new Home(page);
    await registerPage.navigate();
    await registerPage.openLogin();
    await registerPage.selectSignUp();
    await registerPage.fillForm();
    await registerPage.signUp();
    await home.isOnHomePage();
  });

  test("Create a user with existing email", async ({ page }) => {
    const registerPage = new RegisterUser(page);
    const home = new Home(page);
    await registerPage.navigate();
    await registerPage.openLogin();
    await registerPage.selectSignUp();
    await registerPage.fillFormWithExistingEmail();
    await registerPage.signUp();
    await registerPage.mailExists();
  });
});
