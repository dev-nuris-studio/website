<template>
    <div class="the-page">
      <TheHeader />
      <ContactBox />
      <TheFooter />
      <RoundButton class="the-page__round-button" :href="`mailto:${email}`">
        <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 1H19C20.1 1 21 1.9 21 3V15C21 16.1 20.1 17 19 17H3C1.9 17 1 16.1 1 15V3C1 1.9 1.9 1 3 1Z" stroke="#18191D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21 3L11 10L1 3" stroke="#18191D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </RoundButton>
    </div>
</template>

<style lang="scss">

  .the-page {
    width: 100%;
    overflow: hidden;

    &__round-button {
      position: fixed;
      bottom: 32px;
      right: 32px;
      z-index: 10;

      @include mq($min-width: $desktop) {
        display: none;
      }
    }

  }

</style>

<script setup>
import { email } from '@/data';
const route = useRoute();
const { $fetchPageBySlug } = useNuxtApp();
const slug = !!route?.params?.slug ? '/' + route.params.slug.join('/') : '/';
const {data} = useAsyncData(slug, async () => await $fetchPageBySlug(slug));

useSeoMeta({
  title: () => data?.value?.seo?.fields?.metaTitle,
  description: () => data?.value?.seo?.fields?.metaDescription,
});
</script>
