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
    <button v-if="tocart" @click.prevent="addToCart" type="button" class="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Add to Cart</button>
    <button v-else @click.prevent="removeFromCart" type="button" class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Remove from Cart</button>
</template>