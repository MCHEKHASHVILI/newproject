<script setup>
import ListTitle from './ListTitle.vue'
import ULList from './ULList.vue'
import { useStore } from 'vuex'

const store = useStore()

const title = store.getters.getProductsObject.name
const productsData = store.getters.getProductsObject.data
const action = store.getters.getProductsObject.action

</script>
<template>
    <div class="w-full">
        <ListTitle :title="title" />
        <ULList :data="productsData" :action="action" />
    </div>
</template>