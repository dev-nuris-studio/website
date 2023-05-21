<template>
    <a class="round-button" :href="href">
        <slot></slot>
    </a>
</template>

<style lang="scss">

    .round-button {
        background-color: $white;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>

<script setup>
    const props = defineProps(['href']);
</script>