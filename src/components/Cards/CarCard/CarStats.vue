<template>
  <div class="relative mx-3 mt3" data-testid="car-card-stats-div">
    <h2 class="font-bold text-lg">Stats:</h2>
    <div class="flex border-t border-solid border-gray-200 text-sm">
      <h3 class="w-36 pl-2">Speed</h3>
      <h3 class="font-semibold">{{ numberToStats(speed) }}</h3>
    </div>
    <div class="flex border-t border-solid border-gray-200 text-sm">
      <h3 class="w-36 pl-2">Handling</h3>
      <h3 class="font-semibold">{{ numberToStats(handling) }}</h3>
    </div>
    <div class="flex border-t border-solid border-gray-200 text-sm">
      <h3 class="w-36 pl-2">Acceleration</h3>
      <h3 class="font-semibold">{{ numberToStats(acceleration) }}</h3>
    </div>
    <div class="flex border-t border-solid border-gray-200 text-sm">
      <h3 class="w-36 pl-2">Launch</h3>
      <h3 class="font-semibold">{{ numberToStats(launch) }}</h3>
    </div>
    <div class="flex border-t border-solid border-gray-200 text-sm">
      <h3 class="w-36 pl-2">Braking</h3>
      <h3 class="font-semibold">{{ numberToStats(braking) }}</h3>
    </div>
    <div class="flex border-t border-solid border-gray-200 text-sm">
      <h3 class="w-36 pl-2">Offroad</h3>
      <h3 class="font-semibold">{{ numberToStats(offroad) }}</h3>
    </div>
    <div class="flex border-t border-solid border-gray-200 text-sm font-bold">
      <h3 class="w-36 pl-2">Total</h3>
      <h3>{{ numberToStats(stat) }}</h3>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue';

const props = defineProps({
  speed: {
    type: Number,
    required: true,
  },
  handling: {
    type: Number,
    required: true,
  },
  acceleration: {
    type: Number,
    required: true,
  },
  launch: {
    type: Number,
    required: true,
  },
  braking: {
    type: Number,
    required: true,
  },
  offroad: {
    type: Number,
    required: true,
  },
  stat: {
    type: Number,
    required: true,
  },
});

const { speed, handling, acceleration, launch, braking, offroad, stat } = toRefs(props);

const numberToStats = (number: number) => {
  return (number / 10).toFixed(1);
};
</script>
