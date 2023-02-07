<script setup>

import { useStore } from 'vuex'

const props = defineProps({
    tocart: { type: Boolean, required: false, default: true },
    id: { type: Number, required: true }
})

const store = useStore()

function addToCart(){
    store.dispatch("addItemToCart", props.id)
}

function removeFromCart(){
    store.dispatch("removeItemFromCart", props.id)
}


</script>
<template>
    <button v-if="tocart" @click.prevent="addToCart" type="button" :class="store.getters.getAddButtonClasses">Add to Cart</button>
    <button v-else @click.prevent="removeFromCart" type="button" :class="store.getters.getRemoveButtonClasses">Remove from Cart</button>
</template>