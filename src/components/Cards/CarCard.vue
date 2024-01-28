<template>
  <div class="border border-green-500 w-96 h-48">
    <h1>{{ car.id }}</h1>
  </div>
</template>

<script lang="ts" setup>
import { type PropType } from 'vue';
import type { Car } from '@/api/types';

defineProps({
  car: {
    type: Object as PropType<Car>,
    required: true,
  },
});
</script>
