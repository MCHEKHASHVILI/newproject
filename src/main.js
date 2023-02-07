import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

import './assets/main.css'


const store = createStore({
    state() {
        return {
            products: {
                name: "პროდუქტები",
                action: true,
                data: [
                    { id: 1, name: "Product 1", price: 100 },
                    { id: 2, name: "Product 2", price: 200 },
                    { id: 3, name: "Product 3", price: 300 },
                    { id: 4, name: "Product 4", price: 400 },
                    { id: 5, name: "Product 5", price: 500 },
                ]
            },
            cart: {
                name: "კალათა",
                action: false,
                data: []
            }
        }
    },
    getters: {
        getProductsObject(state){
            return state.products
        },
        getCartObject(state){
            return state.cart
        }
    },
    mutations: {
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
    },
    actions: {
        addItemToCart(context, payload){
            context.commit('ADD_ITEM_TO_CART', payload)
        },
        removeItemFromCart(context, payload){
            context.commit('REMOVE_ITEM_FROM_CART', payload)
        }
    }
})




createApp(App)
    .use(store)
    .mount('#app')
