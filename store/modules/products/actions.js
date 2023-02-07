const actions = {
    addItemToCart(context, payload){
        context.commit('ADD_ITEM_TO_CART', payload)
    },
    removeItemFromCart(context, payload){
        context.commit('REMOVE_ITEM_FROM_CART', payload)
    }
}

export default actions