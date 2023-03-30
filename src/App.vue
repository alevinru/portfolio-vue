<template lang="pug">
v-app
  v-main
    router-view
</template>

<script setup lang="ts">
import { loadImages } from '@/services/imaging';

loadImages('ams-2007')
  .then(() => {
    console.log('Images loaded');
  });

</script>
