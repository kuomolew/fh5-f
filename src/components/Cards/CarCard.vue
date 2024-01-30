<template>
  <div class="relative border border-green-500 w-96">
    <appropriate-image
      :image="car.image"
      :path="'cars'"
      :alt="`${car.id} image`"
      class="absolute w-full top-0 left-0"
    />
    <div
      class="absolute border border-green-500 rounded h-8 w-52 -top-4 left-[50%] -translate-x-[50%] bg-white z-10"
    >
      <h1 class="text-center text-xl font-bold">{{ car.id }}</h1>
    </div>

    <car-rarity :rarity="car.rarity" />

    <appropriate-image
      :image="car.country"
      :path="'flags'"
      :alt="`${car.country} flag`"
      class="absolute w-14 top-0 left-auto right-0"
    />

    <div class="relative mt-44 mx-3">
      <h3 class="[text-shadow:_0_0_2px_rgba(255,255,255,1)] font-semibold text-lg">
        {{ car.manufacturer }} {{ car.model }}, {{ car.year }}
      </h3>
      <div class="flex justify-between">
        <h3 class="[text-shadow:_0_0_2px_rgba(255,255,255,1)] font-medium text-sm">
          {{ car.type }}
          <br />
          {{ car.classification }}
        </h3>
        <h3 class="[text-shadow:_0_0_2px_rgba(255,255,255,1)] font-extrabold">
          {{ car.class }} {{ car.pi }}
        </h3>
      </div>
    </div>

    <div class="relative mx-3 mt3">
      <h2 v-if="car.autoshow" class="w-full text-center font-extrabold text-2xl">
        {{ car.value }}
      </h2>
      <h2 v-else class="w-full text-center font-semibold text-lg">Not listed at Autoshow</h2>
      <h2 v-if="car.wheelspin" class="w-full text-center font-medium">Wheelspin available</h2>
    </div>

    <div class="flex">
      <car-stats
        :speed="car.speed"
        :handling="car.handling"
        :acceleration="car.acceleration"
        :launch="car.launch"
        :braking="car.braking"
        :offroad="car.offroad"
        :stat="car.stat"
        class="w-1/2"
      />
      <div>
        <h3 v-if="car.dlc"><b>DLC:</b><br />{{ car.dlc }}</h3>
        <h3 v-if="car.mission">
          <b>Mission:</b> <br />
          {{ car.mission }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type PropType } from 'vue';

import type { Car } from '@/api/types';

import AppropriateImage from '@/components/Cards/CarCard/AppropriateImage.vue';
import CarRarity from '@/components/Cards/CarCard/CarRarity.vue';
import CarStats from '@/components/Cards/CarCard/CarStats.vue';

defineProps({
  car: {
    type: Object as PropType<Car>,
    required: true,
  },
});
</script>
