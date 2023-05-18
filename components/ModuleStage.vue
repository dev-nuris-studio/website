<template>
    <div class="module-stage">
        <div class="module-stage__inside">
            <div class="module-stage__content">
                <div class="module-stage__text" v-html="html" />
                <TheLogo class="module-stage__logo" />
            </div>

            <img v-if="image?.fields?.file?.url" :src="image.fields.file.url" :alt="image.fields?.title || image.fields?.description || image.fields.file.fileName" class="module-stage__image" />
        </div>
    </div>
</template>

<style lang="scss">

    .module-stage {
        position: relative;

        &__content {
            background-color: $grey-light;
            padding: 48px $side-gap; 
            
            @include mq($min-width: $desktop) {
                padding: 220px 36px;
                width: calc(100% / 3);
            }
        }

        &__text {
            > * {
                margin-bottom: 20px;

                &:nth-last-child(1),
                &:nth-last-child(2) {
                    margin-bottom: 0;
                }
            }
        }

        &__logo {
            margin-top: 10px;
        }

        &__image {
            width: 100%;
            height: 300px;
            object-fit: cover;

            @include mq($min-width: $desktop) {
                height: 100%;
                position: absolute;
                width: calc(100% / 3 * 2);
                top: 0;
                right: 0;
            }
        }

        &__inside {
            @include mq($min-width: $desktop) {
                display: flex;
            }
        }

    }

</style>

<script setup>
    import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

    const props = defineProps(['fields']);
    const { title, text, image } = props.fields;
    const html = documentToHtmlString(text);
</script>