import './assets/main.css'
import { createApp } from 'vue'


import App from './App.vue'
import store from '../store'

/** Vue Router */
import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'

const routes = [
    {
        path: '/',
        name: "MTAVARI",
        component: Home
    },
    {
        path: '/about',
        name: "About",
        component: About
    },
    {
        path: '/contact',
        name: "Contact",
        component: Contact
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

// Vue Router

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')