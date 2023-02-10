const getters = {
    getProductsObject(state){
        return state.products
    },
    getCartObject(state){
        return state.cart
    },
    getActiveProduct(state){
        return state.activeProduct
    }
}

export default getters