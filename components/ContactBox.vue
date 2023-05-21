<template>
    <div class="contact-box">
        <div class="contact-box__content">
            <div class="h2 contact-box__title">Du hast ein Projekt für nuris.studio?</div>
            <TheButton class="contact-box__the-button" :linkText="email" :link="`mailto:${email}`">
                <template #icon>
                    <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.5 1H19.5C20.6 1 21.5 1.9 21.5 3V15C21.5 16.1 20.6 17 19.5 17H3.5C2.4 17 1.5 16.1 1.5 15V3C1.5 1.9 2.4 1 3.5 1Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M21.5 3L11.5 10L1.5 3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </template>
            </TheButton>
        </div>

        <img src="~/assets/images/diagram-2.svg" alt="diagram" class="contact-box__image" />

    </div>
</template>

<style lang="scss">

    .contact-box {
        background-color: $purple;
        border-radius: 32px;
        padding: 80px $side-gap;
        max-width: $max-width;
        margin: 0 auto;
        position: relative;

        &__title {
            margin-bottom: 40px;
        }

        &__image {
            position: absolute;
            bottom: 0;
            right: 0;
            transform: translate(20px, 20px);
            pointer-events: none;
            z-index: 1;
        }

        &__the-button {
            z-index: 2;
            position: relative;
        }
    }

</style>

<script setup>
    import { email } from '@/data';
</script>