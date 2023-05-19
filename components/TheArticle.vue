<template>
    <div class="the-article" >
        <div class="the-article__inside">
            <TheModules v-if="article && article.modules" :modules="article.modules" />
        </div>
    </div>
</template>

<style lang="scss">

  .the-article {
    
    &--grey {
        background-color: $grey-light;
    }

  }



</style>

<script setup>
    const props = defineProps(['article']);
</script>
