<script setup>
import TopNavigationMenu from '../components/menus/topNavigationMenu.vue';
import Products from '../components/Products.vue'
import MainLayout from '../layouts/mainLayout.vue';
</script>
<template>
    <MainLayout>
        <template v-slot:header>
            <TopNavigationMenu />
        </template>
        <h1>Products Page</h1>
        <Products />
    </MainLayout>
</template>