<template>
    <div class="dynamic-page">
        <TheArticles :articles="page.articles"></TheArticles>
    </div>
</template>

<script setup>
    const props = defineProps(['page']);
</script>
