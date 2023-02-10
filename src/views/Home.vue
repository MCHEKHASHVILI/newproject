<script setup>
import mainLayout from '../layouts/mainLayout.vue'
import topNavigationMenu from '../components/menus/topNavigationMenu.vue'
</script>
<template>
    <mainLayout>
        <template #header>
            <topNavigationMenu />
        </template>
        <template #footer>
            This is a footer
        </template>
        <template #default>
            <h1>Home Page</h1>
        </template>
    </mainLayout>
</template>