import { test } from "@playwright/test";
import { RegisterUser } from "../../pages/register/registerPage";
import { Home } from "../../pages/home/home";
test.describe("User registration", () => {
  let registerPage
  test.beforeEach(async ({ page }) => {
    registerPage = new RegisterUser(page);
    await registerPage.navigate();
    await registerPage.openLogin();
    await registerPage.selectSignUp();
  });
  test("Create a user with valid data", { tag: "@smoke" }, async ({ page }) => {
    const home = new Home(page);
    await registerPage.fillForm();
    await registerPage.signUp();
    await home.isOnHomePage();
  });

  test("Create a user with existing email", async ({ page }) => {
    await registerPage.fillFormWithExistingEmail();
    await registerPage.signUp();
    await registerPage.messageError();
  });

  test("Create a user with invalid email", async ({ page }) => {
    await registerPage.fillFormInvalidEmail();
    await registerPage.signUp();
    await registerPage.mailInvalid();
  });

  test("Create a user with missing data", async ({ page }) => {
    await registerPage.fillFormWithMissingData();
    await registerPage.signUp();
    await registerPage.messageError();
  });
});
