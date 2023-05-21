<template>
    <div class="the-modules">
      <component v-for="module in modules" :key="module.sys.contentType.sys.id" :is="module.sys.contentType.sys.id" v-bind="module" />
    </div>
</template>

<script>
    import ModuleStage from './ModuleStage.vue';
    import ModuleTeaser from './ModuleTeaser.vue';
    import ModuleImageText from './ModuleImageText.vue';
    import ModuleGallery from './ModuleGallery.vue';
    import ModuleText from './ModuleText.vue';

    export default {
        props: {
            modules: {
                type: Array,
                required: true
            }
        },
        components: {
            ModuleStage,
            ModuleTeaser,
            ModuleImageText,
            ModuleGallery,
            ModuleText,
        },
    }
</script>

