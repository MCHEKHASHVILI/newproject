<script setup>
import Cart from '../components/Cart.vue'
import TopNavigationMenu from '../components/menus/topNavigationMenu.vue'
import CartLayout from '../layouts/cartLayout.vue'
</script>
<template>
    <CartLayout>
        <template v-slot:header>
            <TopNavigationMenu />
        </template>
        <Cart />
    </CartLayout>
</template>