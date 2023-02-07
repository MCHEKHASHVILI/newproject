<script setup>
defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>
<template>
    <h1 class="font-bold text-2xl mb-2">{{ title }}</h1>
</template>