import { createStore } from 'vuex'
import mainPlugin from './plugins/mainPlugin'

const store = createStore({
    state(){
        return {
            anotherData: []
        }
    },
    plugins: [ mainPlugin ],
})

export default store