<script setup>
import ListTitle from './ListTitle.vue'
import ULList from './ULList.vue'
import { useStore } from 'vuex'

const store = useStore()

const title = store.getters.getCartObject.name
const data = store.getters.getCartObject.data
const action = store.getters.getCartObject.action

</script>

<template>
    <div class="w-full">
        <ListTitle :title="title" />
        <ULList :data="data" :action="action"/>
    </div>
</template>