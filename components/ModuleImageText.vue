<template>
    <div class="module-image-text">
        <div class="module-image-text__image-container">
            <img class="module-image-text__image" :src="image.fields.file.url" :alt="image.fields?.title || image.fields?.description || image.fields.file.fileName" />
        </div>
        <div class="module-image-text__content">
            <div class="module-image-text__text" v-html="html" />
        </div>
    </div>  
</template>

<style lang="scss">
    .module-image-text {
        padding: 80px $side-gap;
        max-width: $max-width;
        margin: 0 auto;

        @include mq($min-width: $desktop) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
            align-items: center;
            padding-left: 0;
            padding-right: 0;
        }

        &__image-container {
            margin-bottom: 40px;

            @include mq($min-width: $desktop) {
                height: 600px;
            }
        }

        &__text {
        
            > * {
                margin-bottom: 20px;

                &:nth-last-child(1) {
                    margin-bottom: 0;
                }
            }

            h1, h2, h3, h4, h5, h6 {
                margin-bottom: 40px;
            }

            p {
                @include mq($min-width: $desktop) {
                    font-size: 24px;
                    line-height: 38px;
                }
            }

        }

        &__image {
            width: 100%;
            height: auto;
            border-radius: 20px;

            @include mq($min-width: $desktop) {
                border-radius: 40px;
            }
        }
    }


</style>

<script setup>
  import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

  const props = defineProps(['fields']);
  const { text, image } = props.fields;
  const html = documentToHtmlString(text);

</script>