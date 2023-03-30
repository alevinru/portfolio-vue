<template lang="pug">
.author-title
  .text-h3.name {{ author.name }}
  .text-h4.moto.text-grey-darken-2 {{ author.moto }}
</template>

<script setup lang="ts">
import type Author from '@/types/author';

defineProps<{
  author: Author,
}>();
</script>

<style scoped lang="scss">
@import "@/styles/variables.scss";
</style>
