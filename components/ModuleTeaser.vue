<template>
    <div class="module-teaser" :class="{'module-teaser--masonry': fields.masonryGrid}">
      <h3 class="module-teaser__headline" v-if="fields.headline">{{  fields.headline }}</h3>
      <div v-if="!fields.masonryGrid" class="module-teaser__items">
        <TeaserItem v-for="teaser in fields.teaser" :key="teaser.sys.id" class="module-teaser__teaser-item" :title="teaser.fields.headline" :text="teaser.fields.text" :link="teaser.fields.link" :pageLink="teaser.fields.pageLink" :linkText="teaser.fields.linkText" />
      </div>
      <div v-if="!!fields.masonryGrid" class="module-teaser__items">
        <masonry-wall :items="fields.teaser" :column-width="300" :gap="16">
          <template #default="{ item, index }">
            <TeaserBorderItem :image="index === 0" class="module-teaser__teaser-border-item" :title="item.fields.headline" :text="item.fields.text" :link="item.fields.link" :pageLink="item.fields.pageLink" :linkText="item.fields.linkText" />
          </template>
        </masonry-wall>
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
          
        }
      }

      &__teaser-border-item {
        margin-bottom: 16px;

        &:last-child {
          margin-bottom: 0;
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

      &--masonry {
        
        .module-teaser {
          &__headline {
            margin-bottom: 40px;
          }  
        }

        @include mq($min-width: $desktop) {
          display: grid;
          grid-template-columns: 1fr 2fr;

          &__items {
            display: block;
          }
        }

      }

    }
  
  </style>
  
  <script setup>
    const props = defineProps(['fields']);
  </script>