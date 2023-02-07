<script setup>
import { onMounted } from 'vue';
import { useStore } from 'vuex';
import Cart from './components/Cart.vue'
import Products from './components/Products.vue'

const store = useStore()

store.getters

onMounted(() => {
  console.log(store)
})

</script>
<template>
  <div class="container flex flex-row mt-4 mx-auto">
    <Products />
    <Cart/>
  </div>
</template>