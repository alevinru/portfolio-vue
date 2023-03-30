<template lang="pug">
.text-center
  author-title.pa-2(:author="store.author")
  gallery-list(:galleries="store.galleries")
</template>

<script setup lang="ts">
import { useAppStore } from '@/store/app';
import GalleryList from '@/components/GalleryList.vue';
import AuthorTitle from '@/components/AuthorTitle.vue';

const store = useAppStore();

</script>

<style scoped lang="scss">
@import "@/styles/variables.scss";
</style>
