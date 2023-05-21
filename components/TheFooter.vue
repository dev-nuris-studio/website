<template>
    <footer class="the-footer">

        <div class="the-footer__inside">

            <TheLogo class="the-footer__the-logo" />
            <nav class="the-footer__navigation" v-if="navigation?.data?.value?.childs">
                <template v-for="item in navigation.data.value.childs" :key="item.sys.id">
                    <nuxt-link v-if="!item?.entry?.fields?.link" class="the-footer__link" :to="item.url">{{ item.name }}</nuxt-link>
                    <a v-if="!!item?.entry?.fields?.link" class="the-footer__link" :href="item.url" target="_blank">{{ item.name }}</a>
                </template>
                
            </nav>


        </div>

    </footer>
</template>

<style lang="scss">

    .the-footer {
        padding: 80px $side-gap 40px $side-gap;
        text-align: center;

        @include mq($min-width: $desktop) {
            padding: 150px 0 80px 0;
        }

        &__the-logo {
            margin-bottom: 40px;
        }

        &__inside {
            max-width: $max-width;
            margin: 0 auto;

        }

        &__link {
            color: $black;
            text-decoration: none;
            font-weight: 500;
            font-family: 'Urbanist', sans-serif;
            display: block;
            margin-bottom: 28px;
            font-size: 18px;

            @include mq($min-width: $desktop) {
                font-size: 20px;
                margin-bottom: 0;
            }

            &:last-child {
                margin-bottom: 0;
            }
        }

        &__navigation {
            @include mq($min-width: $desktop) {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 80px;
            }
        }
    }

</style>

<script setup>
    const { $fetchNavigation } = useNuxtApp();
    const navigation = await useAsyncData('footer', async () => await $fetchNavigation('footer'));
</script>