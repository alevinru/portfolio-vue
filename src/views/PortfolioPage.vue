<template lang="pug">
.text-center.my-2
  author-title.pa-2.my-1(:author="store.author")
  v-progress-circular.mt-10(
    v-if="!store.galleries.length"
    :size="100"
    :width="10"
    indeterminate
  )
  gallery-list(
    v-else
    :galleries="store.galleries"
    @click="onClick"
  )
</template>

<script setup lang="ts">
import { useAppStore } from '@/store/app';
import GalleryList from '@/components/GalleryList.vue';
import AuthorTitle from '@/components/AuthorTitle.vue';
import type Gallery from '@/types/gallery';
import { useRouter } from 'vue-router';

const store = useAppStore();
const router = useRouter();

function onClick(gallery: Gallery) {
  router.push({ name: 'Gallery', params: { folder: gallery.folder } });
}

</script>

<style scoped lang="scss">
@import "@/styles/variables.scss";
</style>
