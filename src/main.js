import './assets/main.css'
import { createApp } from 'vue'

import App from './App.vue'
// import Beta from './Beta.vue'
import store from '../store'
// import store from '../mariami'

createApp(App)
    .use(store)
    .mount('#app')