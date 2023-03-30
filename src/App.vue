<template lang="pug">
v-app
  v-main
    router-view
  v-bottom-navigation.align-center(
    elevation="0"
    density="compact"
  )
    router-link(:to="{ name: 'Home' }")
      small Copyright &copy; {{ author.name }}
</template>

<script setup lang="ts">
import { loadAuthor } from '@/services/authoring';
import { loadImages } from '@/services/imaging';
import { storeToRefs } from 'pinia';
import { useAppStore } from '@/store/app';

const { author } = storeToRefs(useAppStore());

loadAuthor('author/alevin');

</script>
