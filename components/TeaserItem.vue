<template>
    <div class="teaser-item">
      <div class="teaser-item__top">
        <h4 v-if="title" class="teaser-item__title">{{ title }}</h4>
        <p v-if="text" class="teaser-item__text">{{ text }}</p>
      </div>
    </div>
  </template>
  
  <style lang="scss">

    .teaser-item {

      &__title {
        
        &::after {
          content: ' ';
          display: block;
          width: 64px;
          height: 1px;
          margin-top: 20px;
          margin-bottom: 20px;
          background-color: $black;  
        }
      }

    }

  </style>
  
  <script setup>
    const props = defineProps(['title', 'text', 'link', 'pageLink', 'linkText']);
    const { title, text, link, pageLink, linkText } = props;
  </script>