<template>
  <div class="flex flex-wrap w-full h-fit justify-around py-5 px-10">
    <car-card v-for="car in props.cars" :key="car.id" :car="car" class="my-5" />
  </div>
</template>

<script lang="ts" setup>
import type { Car } from '@/api/types';
import CarCard from '@/components/Cards/CarCard/CarCard.vue';

const props = defineProps({
  cars: {
    type: Array as () => Car[],
    required: true,
  },
});
</script>
