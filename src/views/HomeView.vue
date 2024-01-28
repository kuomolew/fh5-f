<template>
  <main>
    <manufacturer-letter-selection />
    <div class="flex flex-row flex-nowrap w-full">
      <manufacturer-selection />
      <car-listing-by-manufacturer />
    </div>
  </main>
</template>

<script lang="ts" setup>
import ManufacturerLetterSelection from '@/components/Selection/ManufacturerLetterSelection.vue';
import ManufacturerSelection from '@/components/Selection/ManufacturerSelection.vue';
import CarListingByManufacturer from '@/components/CarListings/CarListingByManufacturer.vue';
</script>
