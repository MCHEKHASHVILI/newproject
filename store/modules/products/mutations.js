const mutations = {
    
    ADD_ITEM_TO_CART(state, payload){
        /** ვიპოვოთ პროდუქტი */
        let product = state.products.data.find(item => item.id == payload)
        /** ამოვშალოთ პროდუქტების სიიდან */
        state.products.data.splice(state.products.data.indexOf(product),1)
        /**ავამატოთ კალათაში */
        state.cart.data.push(product)
    },
    REMOVE_ITEM_FROM_CART(state, payload){
        /** ვიპოვოთ პროდუქტი */
        let product = state.cart.data.find(item => item.id == payload)
        /** ამოვშალოთ კალათიდან */
        state.cart.data.splice(state.cart.data.indexOf(product),1)
        /** დავამატოთ პროდუქტებში */
        state.products.data.push(product)
    },  
}

export default mutations