import navigationModule from "../modules/navigation"

export default function menuPlugin(store){
    store.registerModule("navigationModule", navigationModule)
}