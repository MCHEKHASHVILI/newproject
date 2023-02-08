import buttonsModule from "../modules/buttons"
import productsModule from "../modules/products"

export default function mainPlugin(store){
    
    store.subscribe((mutation, state) => {

        console.log(mutation, state)
      // called after every mutation.
      // The mutation comes in the format of `{ type, payload }`.
    })

    store.subscribeAction({
        before: (action, state) => {
          console.log(`before action ${action.type}`)
        },
        after: (action, state) => {
          console.log(`after action ${action.type}`)
        }
      })

    store.registerModule('productsModule', productsModule)
    store.registerModule('buttonsModule', buttonsModule)
    // store.unregisterModule('buttonsModule')
}