<template>
    <div class="teaser-border-item" :class="{'teaser-border-item--has-image': image}">
        <div class="teaser-border-item__top">
            <h4 v-if="title" class="teaser-border-item__title">{{ title }}</h4>
            <p v-if="text" class="teaser-border-item__text">{{ text }}</p>
            <img v-if="image" src="~/assets/images/diagram.svg" alt="diagram" class="teaser-border-item__image" />
        </div>
    </div>
</template>
  
<style lang="scss">
.teaser-border-item {
    background-color: $grey-light;
    border: 1px solid $purple;
    border-radius: 16px;
    padding: 32px;

    &--has-image {
        padding-bottom: 0;
    }


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
const props = defineProps(['title', 'text', 'link', 'pageLink', 'linkText', 'image']);
const { title, text, link, pageLink, linkText, image } = props;
</script>