import { test } from "@playwright/test";
import { RegisterUser } from "../../pages/register/registerPage";
import { Home } from "../../pages/home/home"
test.describe('Creating a gift list', () => {
    let registerPage
    let home
    test.beforeEach(async ({page}) => {
        registerPage = new RegisterUser(page)
        homePage = new Home(page)
        await registerPage.navigate()
        await registerPage.openLogin()
        await homePage.fillLogin()
        await registerPage.selectSignUp()
        await homePage.selectShopAll()
    })
})