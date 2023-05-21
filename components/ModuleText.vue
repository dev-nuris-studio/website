<template>
    <div class="module-text" v-html="html" />
  </template>
  
  <style lang="scss">
  
    .module-text {
      color: $black;
      padding: 80px $side-gap;
      width: 100%;
      max-width: $max-width;
      margin: 0 auto;
  
      @include mq($min-width: $desktop) {
        padding: 120px 0;
      }
  
      > * {
        margin-bottom: 20px;
  
        @include mq($min-width: $desktop) {
          margin-bottom: 40px;
        }
  
        &:last-child {
          margin-bottom: 0;
        }
      }
  
      a {
        color: $black;
      }

      p {
        font-size: 20px;
        line-height: 28px;
  
        @include mq($min-width: $desktop) {
          font-size: 24px;
          line-height: 32px;
        }
      }

  
    }
  
  </style>
  
  <script setup>
    import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
  
    const props = defineProps(['fields']);
    const html = documentToHtmlString(props.fields.text);
  </script>