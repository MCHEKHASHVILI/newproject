import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"

const productsModule = {
    state() {
        return {
            activeProduct: null,
            products: {
                name: "პროდუქტები",
                action: true,
                data: [
                    { id: 1, name: "Product 1", price: 100, description: 'Random Description for all Products' },
                    { id: 2, name: "Product 2", price: 200, description: 'Random Description for all Products' },
                    { id: 3, name: "Product 3", price: 300, description: 'Random Description for all Products' },
                    { id: 4, name: "Product 4", price: 400, description: 'Random Description for all Products' },
                    { id: 5, name: "Product 5", price: 500, description: 'Random Description for all Products' },
                ]
            },
            cart: {
                name: "კალათა",
                action: false,
                data: []
            }
        }
    },
    getters,
    mutations,
    actions
}

export default productsModule