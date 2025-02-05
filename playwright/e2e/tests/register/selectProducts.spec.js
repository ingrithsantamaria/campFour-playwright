import { test } from "@playwright/test";
import { RegisterUser } from "../../pages/register/registerPage";
import { Home } from "../../pages/home/home"
test.describe('Creating a gift list', () => {
    let registerPage
    let homePage
    test.beforeEach(async ({page}) => {
        registerPage = new RegisterUser(page)
        homePage = new Home(page)
        await registerPage.navigate()
        await registerPage.openLogin()
        await registerPage.selectSignUp()
        await registerPage.fillForm();
        await registerPage.signUp();
        await homePage.selectShopAll()
    })
    test('Select multiple products and the total is less than $100', {tag: "@e2e"}, async ({page}) => {
        homePage = new Home(page)
        await homePage.selectProducts(99)
    })

    test('Select multiple products until the total equals $100', {tag: "@e2e"}, async ({page}) => {
        homePage = new Home(page)
        await homePage.selectProducts(100)
    })
    
    test('Select multiple products until the value exceeds $100', {tag: "@e2e"}, async ({page}) => {
        homePage = new Home(page)
        await homePage.selectProducts(101)
    })
})