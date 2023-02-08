<script setup>
import { useStore } from 'vuex';


const store = useStore()



</script>
<template>
    <div class="container mx-auto">
    <div>{{ store.state.count }}</div>
    <div><button @click="store.commit('increment')">Increment</button></div>
    </div>
</template>