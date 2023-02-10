<template>
    <div>
        <slot name="header" />
        <div class="container flex flex-col mx-auto space-y-4">
            <slot />
        </div>
        <slot name="footer" />
    </div>
</template>
