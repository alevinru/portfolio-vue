<template lang="pug">

v-responsive.gallery-list
  v-row(
  )
    v-col.mx-auto.v-col-md-8.v-col-lg-8.v-col-sm-10(
      cols="12"
      v-for="gallery in galleries"
      :key="gallery.id"
    )
      v-card.ma-2(@click="emit('click', gallery)")
        v-card-title {{ gallery.title }}
        v-card-text
          v-img(:src="gallery.avatar")

</template>
<script setup lang="ts">
import type Gallery from '@/types/gallery';

defineProps<{
  galleries: Gallery[];
}>();

const emit = defineEmits<{
  (e: 'click', gallery: Gallery): void;
}>();

</script>
<style scoped lang="scss">
@import "@/styles/variables.scss";
</style>
