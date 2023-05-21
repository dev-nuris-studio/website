<template>
    <div class="the-articles">
      <TheArticle v-for="article in articles" :key="article.id" :article="article" :class="{ 'the-article--grey': article.backgroundGrey }" />
      <slot></slot>
    </div>
</template>

<script setup>
    const props = defineProps(['articles']);

</script>
