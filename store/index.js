import { createStore } from 'vuex'
import buttonsModule from './modules/buttons'
import productsModule from './modules/products'

const store = createStore({
    state(){
        return {
            anotherData: []
        }
    },
    modules: [ productsModule, buttonsModule ]
})

export default store