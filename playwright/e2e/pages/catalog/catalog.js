import { selectors } from "../../selectors/selectors";
export class Catalog {
    constructor(page) {
        this.page = page;
    }

    async getAffordableProducts() {
        const affordableProduct = []
        const count = await selectors.productCard.count()

        for (let i = 0; i < count; i++) {
            const priceText = await selectors.productCard.nth(i).find(selectors.priceContainer).innerText()
            const price = parseFloat(priceText.replace("$", ""))
            if (price <= 100) {
                affordableProduct.push(selectors.productCard.nth(i))
            }
        }
        return affordableProduct
    }

    async selectRandomProduct(products) {
        if (products.length === 0) {
            throw new Error("No products found")
        }
        const randomIndex = Math.floor(Math.random() * products.length)
        await products[randomIndex].click()
        
    }
    
   

}