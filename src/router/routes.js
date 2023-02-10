import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Products from '../views/Products.vue'
import Cart from  '../views/Cart.vue'
import DisplayProduct from '../components/DisplayProduct.vue'

const routes = [
    {
        path: '/',
        name: "Home",
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
    {
        path: '/products',
        name: "Products",
        component: Products,
    },
    {
        path: '/cart',
        name: "Cart",
        component: Cart
    },
    {
        path: '/product/:id',
        name: 'Product',
        component: DisplayProduct
    }
]

export default routes