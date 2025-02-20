import { selectors } from "../../selectors/selectors";
export class ShoppingCart {
    constructor(page) {
        this.page = page;
    }

   async getCratItems() {
        return await selectors.cartItems.count()
    }
}