<template lang="pug">
v-container.px-0
  v-row(align="center")
    v-col.v-col-md-4.v-col-lg-3.v-col-xs-2.v-col-sm-6(
      cols="12"
      v-for="item in items"
      :key="item.fullPath"
    )
      v-sheet.px-sm-2.mx-sm-2.my-2.py-2
        v-img.mx-auto(
          @click="emit('click', item)"
          :src="item.thumbnail"
        )
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type Image from '@/types/image';
import { useAppStore } from '@/store/app';

const props = defineProps<{
  folder: string;
}>();
const emit = defineEmits<{
  (e: 'click', image: Image): void
}>();

const store = useAppStore();
const items = computed<Image[]>(() => store.imagesMap.get(props.folder) || []);

</script>

<style scoped lang="scss">
@import "@/styles/variables.scss";

.v-img {
  max-width: 360px;
  max-height: 350px;
  cursor: zoom-in;
}
</style>
