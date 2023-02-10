import { createStore } from 'vuex'
import mainPlugin from './plugins/mainPlugin'
import menuPlugin from './plugins/menuPlugin'

const store = createStore({
    plugins: [ mainPlugin, menuPlugin ],
})

export default store