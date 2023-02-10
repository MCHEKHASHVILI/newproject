const actions = {
    addItemToCart({ commit }, payload){
        commit('ADD_ITEM_TO_CART', payload)
    },
    removeItemFromCart({ commit }, payload){
        commit('REMOVE_ITEM_FROM_CART', payload)
    },
    getRecordById({ commit, getters }, payload){

        commit('GET_PRODUCT_BY_ID', payload)

    }
}

export default actions