<template>
    <div class="module-gallery">
        <h3 class="module-gallery__title" v-if="fields.headline">{{ fields.headline }}</h3>
        <div class="module-gallery__items">
            <div v-for="image in fields.images" :key="image.sys.id" class="module-gallery__item">
                <img :src="image.fields.file.url" :alt="image.fields.title" class="module-gallery__image" />
            </div>
        </div>
    </div>
</template>
  
<style lang="scss">
.module-gallery {

    padding: 80px $side-gap;
    max-width: $max-width;
    margin: 0 auto;

    @include mq($min-width: $desktop) {
        padding: 120px 0;
    }

    &__title {
        margin-bottom: 40px;

        @include mq($min-width: $desktop) {
            margin-bottom: 80px;
        }
    }

    &__items {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 20px;

        @include mq($min-width: $desktop) {
            grid-template-columns: repeat(4, 1fr);
            row-gap: 36px;
        }
    }

    &__item {
        height: 132px;
        display: flex;
        align-items: center;
    }

    &__image {
        width: 50%;
        height: 50%;
        object-fit: contain;
        margin: 0 auto;
        display: block;
        filter: grayscale(100%);
        transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s;

        &:hover {
            filter: grayscale(0%);
        }
    }
}
</style>
  
<script setup>
const props = defineProps(['fields']);
</script>