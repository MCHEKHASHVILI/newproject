const navigationModule = {
    state() {
        return {
            menu: [
                { routeName: 'Home', title: 'Main Page' },
                { routeName: 'About', title: 'About Us' },
                { routeName: 'Contact', title: 'Contac Us' },
                { routeName: 'Products', title: 'Products' },
                { routeName: 'Cart', title: 'Cart' },
            ]
        }
    },
    getters: {
        topNavigationMenu(state) {
            return state.menu
        }
    }
}

export default navigationModule