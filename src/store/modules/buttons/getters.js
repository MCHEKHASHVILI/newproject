const getters = {
    getAddButtonClasses(state){
        return state.button_classes.add
    },
    getRemoveButtonClasses(state){
        return state.button_classes.remove
    }
}

export default getters