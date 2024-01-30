<template>
  <div
    class="flex flex-col border-r border-solid border-gray-200 bg-white p-4 w-80 h-full min-h-screen"
  >
    <h1 class="w-full text-center text-xl font-medium">Make:</h1>
    <manufacturer-card
      v-for="manufacturer in manufacturers"
      :key="manufacturer"
      :is-active="isManufacturerSelected(manufacturer)"
      :manufacturer="manufacturer"
      @click="selectManufacturer(manufacturer)"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useManufacturersStore } from '@/stores/manufacturers';
import { useUserStore } from '@/stores/user';
import ManufacturerCard from '@/components/Cards/ManufacturerCard.vue';

import scrollToTop from '@/utils/scrollToTop';

const manufacturersStore = useManufacturersStore();
const userStore = useUserStore();

let manufacturers = computed(() => manufacturersStore.FILTERED_MANUFACTURERS);

let selectManufacturer = (manufacturer: string) => {
  userStore.SELECT_MANUFACTURER(manufacturer);
  scrollToTop();
};

let isManufacturerSelected = (manufacturer: string) => {
  return manufacturer === userStore.selectedManufacturer;
};
</script>
