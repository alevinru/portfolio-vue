<template lang="pug">
v-app-bar(
  density="compact"
  :elevation="0"
)
  template(#prepend)
    v-btn.back(
      variant="text"
      prepend-icon="$mdiArrowLeft"
      :to="{ name: 'Home' }"
    ) back
v-container.text-center
  .text-h4.text-grey-darken-2 {{ gallery?.title }}
  .text-h6.moto.text-grey-darken-2
    small {{ gallery?.description }}
  v-progress-circular.my-10(
    v-if="!images.length"
    :size="100"
    :width="10"
    indeterminate
  )
  image-gallery(
    v-else
    :folder="folder"
    @click="onClick"
  )
vue-easy-lightbox(
  :visible="visibleRef"
  :imgs="images"
  :index="indexRef"
  @hide="onHide"
  move-disabled
  :min-zoom="1"
  :max-zoom="2"
  :scroll-disabled="true"
)
</template>

<script setup lang="ts">
import ImageGallery from '@/components/ImageGallery.vue';
import VueEasyLightbox from 'vue-easy-lightbox';
import { computed, ref, watch } from 'vue';
import type Image from '@/types/image';
import type Gallery from '@/types/gallery';
import { useAppStore } from '@/store/app';
import { loadImages } from '@/services/imaging';

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

watch(props, ({ folder }) => {
  loadImages(folder)
    .then(() => {
      console.log('Images loaded:', folder);
    });
}, { immediate: true })

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
