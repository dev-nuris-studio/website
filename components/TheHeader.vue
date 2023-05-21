<template>
    <div class="the-header">

        <div class="the-header__inside">

            <TheLogo class="the-header__the-logo" />
            <TheButton class="the-header__the-button" :linkText="email" :link="`mailto:${email}`">
                <template #icon>                    
                    <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 1H19C20.1 1 21 1.9 21 3V15C21 16.1 20.1 17 19 17H3C1.9 17 1 16.1 1 15V3C1 1.9 1.9 1 3 1Z" stroke="#18191D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M21 3L11 10L1 3" stroke="#18191D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </template>
            </TheButton>

        </div>

    </div>
</template>

<style lang="scss">
    body {
        padding-top: 58px;

        @include mq($min-width: $desktop) {
            padding-top: 82px;
        }
    }
    .the-header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 10;
        background-color: $white;

        &__inside {
            width: 100%;
            max-width: $max-width;
            margin: 0 auto;
            display: flex;
            height: 58px;
            align-items: center;
            justify-content: center;

            @include mq($min-width: $desktop) {
                justify-content: space-between;
                height: 82px;
            }
        }

        &__the-button {
            display: none;

            @include mq($min-width: $desktop) {
                display: inline-flex;
                height: auto;
                background-color: transparent;
                color: $black;
            }
        }
    }

</style>

<script setup>
    import { email } from '@/data';
</script>