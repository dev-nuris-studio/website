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
        box-shadow: 0px 10px 30px 10px rgba(0, 0, 0, 0.06);
    }

</style>

<script setup>
    const props = defineProps(['href']);
</script>