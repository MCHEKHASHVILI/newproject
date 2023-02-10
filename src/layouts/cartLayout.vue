<template>
    <div class="container flex flex-col mx-auto space-y-4">
        <slot name="header" />
        <slot />
        <slot name="footer" />
    </div>
</template>