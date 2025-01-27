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
        await homePage.fillLogin()
        await registerPage.signUp()
        await homePage.selectShopAll()
    })
    test('Select a product that costs exactly $100', {tag: "@e2e"}, async ({page}) => {
        homePage = new Home(page)
        await homePage.selectProducts({priceLimit: 100, matchExact: false})
    })

    test('Select multiple products until the total equals $100', {tag: "@e2e"}, async ({page}) => {
        homePage = new Home(page)
        await homePage.selectProducts({priceLimit: 100, matchExact: true})
    })
    
    test('Select multiple products until the value exceeds $100', {tag: "@e2e"}, async ({page}) => {
        homePage = new Home(page)
        await homePage.selectProducts({priceLimit: 100, exceedLimit: true})
    })
})