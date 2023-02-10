<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import MainLayout from '../layouts/mainLayout.vue';
import TopNavigationMenu from './menus/topNavigationMenu.vue';

const route = useRoute()
const store = useStore()

const product = computed(() => {
    return store.getters.getActiveProduct
})
onMounted(() => {
    store.dispatch('getRecordById', route.params.id)
})
</script>

<template>
    <MainLayout>
        <template #header>
            <TopNavigationMenu />
        </template>
        <code>{{ product }}</code>
    </MainLayout>
</template>