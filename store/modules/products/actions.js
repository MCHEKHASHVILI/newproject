const actions = {
    addItemToCart({ commit }, payload){
        commit('ADD_ITEM_TO_CART', payload)
    },
    removeItemFromCart({ commit }, payload){
        commit('REMOVE_ITEM_FROM_CART', payload)
    }
}

export default actions