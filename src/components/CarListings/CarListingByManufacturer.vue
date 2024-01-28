<template>
  <div class="flex flex-col w-full items-center my-5">
    <car-card v-for="car in cars" :key="car.id" :car="car" class="my-5" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useCarsStore } from '@/stores/cars';
import CarCard from '@/components/Cards/CarCard.vue';

const carsStore = useCarsStore();

const cars = computed(() => carsStore.FILTERED_CARS_BY_MANUFACTURER);
</script>
