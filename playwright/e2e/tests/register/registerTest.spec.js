import { test, devices } from "@playwright/test";
import { RegisterUser } from "../../pages/register/registerPage";
test.describe("User registration", () => {
  test("Create a user with valid data [@smoke]", async ({ page }) => {
    const registerPage = new RegisterUser(page);
    await registerPage.navigate();
  });
});
