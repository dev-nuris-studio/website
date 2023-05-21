<template>
    <a v-if="link" class="the-button" :href="link">
        <div v-if="slots.icon" class="the-button__icon"><slot name="icon"></slot></div>
        <span class="the-button__text">{{ linkText }}</span>
    </a>
</template>

<style lang="scss">

    .the-button {
        background-color: $blue;
        width: 100%;
        display: inline-flex;
        align-items: center;
        font-size: 20px;
        line-height: 1;
        height: 68px;
        text-align: center;
        justify-content: center;
        border-radius: 40px;
        color: $white;
        text-decoration: none;

        @include mq($min-width: $tablet) {
            width: auto;
            padding-left: 42px;
            padding-right: 42px;
        }

        &__icon {
            margin-right: 18px;
        }
    }

</style>

<script setup>
import { useSlots } from 'vue'
const slots = useSlots();

const props = defineProps(['icon', 'link', 'pageLink', 'linkText']);
const { link, pageLink, linkText } = props;
</script>