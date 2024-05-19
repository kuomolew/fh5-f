<template>
  <main>
    <manufacturer-letter-selection
      :manufacturers="allManufacturers"
      :selected-letter="selectedLetter"
    />
    <div class="flex flex-row flex-nowrap w-full">
      <manufacturer-selection :manufacturers="filteredManufacturers" />
      <home-view-text v-if="!selectedManufacturer" />
      <car-listing-by-manufacturer v-else :cars="cars" />
    </div>
  </main>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

import ManufacturerLetterSelection from '@/components/Selection/ManufacturerLetterSelection.vue';
import ManufacturerSelection from '@/components/Selection/ManufacturerSelection.vue';
import CarListingByManufacturer from '@/components/CarListings/CarListingByManufacturer.vue';
import HomeViewText from '@/components/Texts/HomeViewText.vue';

import { useUserStore } from '@/stores/user';
import { useManufacturersStore } from '@/stores/manufacturers';
import { useCarsStore } from '@/stores/cars';

const userStore = useUserStore();
const selectedManufacturer = computed(() => userStore.GET_MANUFACTURER());

const manufacturersStore = useManufacturersStore();

let allManufacturers = computed(() => manufacturersStore.ALL_MANUFACTURERS);
let filteredManufacturers = computed(() => manufacturersStore.FILTERED_MANUFACTURERS);

userStore.SELECT_MANUFACTURER_LETTER('All');
let selectedLetter = computed(() => userStore.GET_MANUFACTURER_LETTER());

const carsStore = useCarsStore();
const cars = computed(() => carsStore.FILTERED_CARS_BY_MANUFACTURER);
</script>
