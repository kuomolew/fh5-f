<template>
  <div
    class="flex flex-col border-r border-solid border-brand-gray-200 bg-white p-4 w-80 h-full min-h-screen"
  >
    <h1 class="w-full text-center text-xl font-medium">Make:</h1>
    <manufacturer-card
      v-for="manufacturer in manufacturers"
      :key="manufacturer"
      :is-active="false"
      :manufacturer="manufacturer"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useManufacturersStore } from '@/stores/manufacturers';
import ManufacturerCard from '@/components/Cards/ManufacturerCard.vue';

const manufacturersStore = useManufacturersStore();

let manufacturers = computed(() => manufacturersStore.FILTERED_MANUFACTURERS);
</script>
