<script setup>
import { onMounted } from 'vue';
import Cart from './components/Cart.vue'
import Products from './components/Products.vue'

const menu = [
  { routeName: 'MTAVARI', title: 'Main Page'},
  { routeName: 'About', title: 'About Us'},
  { routeName: 'Contact', title: 'Contac Us'}
]

</script>
<template>
  <div class="container flex flex-col mt-4 mx-auto space-y-4">
    <!-- <Products />
    <Cart/> -->
    <div class="flex flex-row space-x-4">
      <RouterLink v-for="item in menu" :key="item.index" :to="{ name: item.routeName }">{{ item.title }}</RouterLink>
      <!-- <RouterLink :to="{ name: 'MTAVARI' }">Home</RouterLink>
      <RouterLink to="/about">About Us</RouterLink>
      <RouterLink to="/contact">Contact Us</RouterLink> -->
    </div>
    <div>
      <RouterView />
    </div>

  </div>

</template>