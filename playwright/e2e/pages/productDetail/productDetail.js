import { selectors } from "../../selectors/selectors";
export class ProductDetail {
    constructor(page) {
        this.page = page;
    }

    async addToCart() {
        await this.page.click(selectors.addShoppingCart);
    }

    async closeCartSidebar() {
        if (await this.page.isVisible(selectors.cartSidebarClose)){
            await this.page.click(selectors.cartSidebarClose);
        }
    }
}