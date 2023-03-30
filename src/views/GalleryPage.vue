<template lang="pug">
v-container.text-center
  .text-h2 {{ gallery?.title }}
  image-gallery(:folder="folder" @click="onClick")
vue-easy-lightbox(
  :visible="visibleRef"
  :imgs="images"
  :index="indexRef"
  @hide="onHide"
  move-disabled
)
</template>

<script setup lang="ts">
import ImageGallery from '@/components/ImageGallery.vue';
import VueEasyLightbox from 'vue-easy-lightbox';
import { computed, ref } from 'vue';
import type Image from '@/types/image';
import type Gallery from '@/types/gallery';
import { useAppStore } from '@/store/app';

const store = useAppStore();
const props = defineProps<{
  folder: string;
}>();

const gallery = computed<Gallery | undefined>(() => store.galleries.find(({ id }) => id === props.folder));

const visibleRef = ref(false);
const indexRef = ref(0);
const images = computed<string[]>(() => {
  const res: Image[] = store.imagesMap.get(props.folder) || [];
  return res.map(({ url }) => url);
});

function onHide() {
  visibleRef.value = false;
}

function onClick(image: Image) {
  indexRef.value = images.value.findIndex(url => url === image.url);
  visibleRef.value = true;
}

</script>

<style scoped lang="scss">
@import "@/styles/variables.scss";

.vel-modal {
  background-color: rgba(0, 0, 0, 0.85);
}
</style>
