<template lang="pug">
v-img(
  :src="imgSrc"
  max-width="200"
  max-heigth="200"
)
</template>
<script setup lang="ts">
import type { StorageReference } from 'firebase/storage';
import { getDownloadURL } from 'firebase/storage';
import { ref } from 'vue';

const props = defineProps<{
  image: StorageReference;
}>()

const imgSrc = ref<string|null>(null);

getDownloadURL(props.image)
  .then(src => {
    imgSrc.value = src;
  });

</script>

<style scoped lang="scss">
@import "@/styles/variables.scss";
</style>
