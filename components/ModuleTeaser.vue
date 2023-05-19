<template>
    <div class="module-teaser">
      <h3 class="module-teaser__headline" v-if="fields.headline">{{  fields.headline }}</h3>
      <div class="module-teaser__items">
        <TeaserItem v-for="teaser in fields.teaser" :key="teaser.sys.id" class="module-teaser__teaser-item" :title="teaser.fields.headline" :text="teaser.fields.text" :link="teaser.fields.link" :pageLink="teaser.fields.pageLink" :linkText="teaser.fields.linkText" />
      </div>
    </div>
  </template>
  
  <style lang="scss">
  
    .module-teaser {
      padding: 80px $side-gap;
      max-width: $max-width;
      margin: 0 auto;

      @include mq($min-width: $desktop) {
        padding: 120px 0;
      }

      &__headline {
        margin-bottom: 80px;
      }

      &__items {
        @include mq($min-width: $desktop) {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
      }

      &__teaser-item {
        margin-bottom: 40px;

        @include mq($min-width: $desktop) {
          margin-bottom: 0;
        }

        &:last-child {
          margin-bottom: 0;
        }
      }

    }
  
  </style>
  
  <script setup>
    const props = defineProps(['fields']);
  </script>