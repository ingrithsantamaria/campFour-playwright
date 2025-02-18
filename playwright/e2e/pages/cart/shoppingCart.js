import { selectors } from "../../selectors/registerSelectors";
export class ShoppingCart {
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