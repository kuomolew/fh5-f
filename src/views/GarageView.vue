<template>
  <main>
    <garage-view-text v-if="!loggedIn" />
    <div v-else>
      <manufacturer-letter-selection
        :manufacturers="manufacturers"
        :selected-letter="selectedLetter"
      />

      <div class="flex flex-row flex-nowrap w-full">
        <manufacturer-selection :manufacturers="garageManufacturers" />
        <home-view-text v-if="!selectedManufacturer" />
        <car-listing-by-manufacturer v-else :cars="cars" />
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

import { useUserStore } from '@/stores/user';
import { useManufacturersStore } from '@/stores/manufacturers';
import { useCarsStore } from '@/stores/cars';

import GarageViewText from '@/components/Texts/GarageViewText.vue';
import ManufacturerLetterSelection from '@/components/Selection/ManufacturerLetterSelection.vue';
import ManufacturerSelection from '@/components/Selection/ManufacturerSelection.vue';
import CarListingByManufacturer from '@/components/CarListings/CarListingByManufacturer.vue';
import HomeViewText from '@/components/Texts/HomeViewText.vue';

const userStore = useUserStore();
const loggedIn = computed(() => userStore.isLoggedIn);

const manufacturersStore = useManufacturersStore();
let manufacturers = computed(() => manufacturersStore.ALL_MANUFACTURERS);
let garageManufacturers = computed(() => manufacturersStore.FILTERED_GARAGE_MANUFACTURERS);
const selectedManufacturer = computed(() => userStore.GET_MANUFACTURER());

userStore.SELECT_MANUFACTURER_LETTER('All');
let selectedLetter = computed(() => userStore.GET_MANUFACTURER_LETTER());

const carsStore = useCarsStore();
const cars = computed(() => carsStore.FILTERED_GARAGE_CARS_BY_MANUFACTURER);
</script>
