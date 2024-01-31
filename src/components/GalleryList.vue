<template lang="pug">

v-responsive.gallery-list
  v-row.px-2(
  )
    v-col.mx-auto.v-col-md-8.v-col-lg-7.v-col-sm-10(
      cols="12"
      v-for="gallery in galleries"
      :key="gallery.id"
    )
      v-card.my-3.mx-1.bg-grey-lighten-3(
        @click="emit('click', gallery)"
      )
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
