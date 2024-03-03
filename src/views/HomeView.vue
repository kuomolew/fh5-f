<template>
  <main>
    <manufacturer-letter-selection :manufacturers="manufacturers" />
    <div class="flex flex-row flex-nowrap w-full">
      <manufacturer-selection />
      <home-view-text v-if="!selectedManufacturer" />
      <car-listing-by-manufacturer v-else />
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

const userStore = useUserStore();
const selectedManufacturer = computed(() => userStore.GET_MANUFACTURER());

const manufacturersStore = useManufacturersStore();

let manufacturers = computed(() => manufacturersStore.ALL_MANUFACTURERS);
</script>
