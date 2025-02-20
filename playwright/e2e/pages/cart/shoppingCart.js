import { selectors } from "../../selectors/selectors";
export class ShoppingCart {
    constructor(page) {
        this.page = page;
    }
    async navigate() {
        await this.page.goto("/");
    }
    async selectAddToCart() {     
        const addToCart = await this.page.click(selectors.addToCart);
        for (let i = 0; i < addToCart.length; i++) {
            await this.page.click(addToCart[i]);
        }
    }
    async selectCheckout() {
        await this.page.click(selectors.checkoutButton);
        return await this.page.waitForURL("/checkout");
    }
}