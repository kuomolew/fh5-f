<template>
  <img :src="imageSrc" />
</template>

<script lang="ts" setup>
import { computed, toRefs } from 'vue';

const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  extension: {
    type: String,
    default: 'png',
  },
});

const { image, path, extension } = toRefs(props);

const imageName = image.value ? image.value : 'default';
const imageSrc = computed(() => `./${path.value}/${imageName}.${extension.value}`);
</script>
