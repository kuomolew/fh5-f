<template>
  <div class="w-full px-8 pt-2 pb-4 border-b border-solid border-gray-200">
    <h3 class="w-full text-center mb-2 font-semibold text-xl">Select Manufacturer:</h3>
    <div class="flex flex-wrap justify-between w-full">
      <button
        v-for="letter of manufacturerLetters"
        :key="letter"
        :class="{ active: isActiveLetter(letter) }"
        class="px-2 cursor-pointer"
        @click="selectManufacturerLetter(letter)"
      >
        <span v-if="isActiveLetter(letter)">[</span>
        {{ letter }}
        <span v-if="isActiveLetter(letter)">]</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted } from 'vue';

import { useManufacturersStore } from '@/stores/manufacturers';
import { useUserStore } from '@/stores/user';

import allFirstLetters from '@/utils/allFirstLetters';

const manufacturersStore = useManufacturersStore();
onMounted(manufacturersStore.FETCH_MANUFACTURERS);

let manufacturers = computed(() => manufacturersStore.ALL_MANUFACTURERS);
let manufacturerLetters = computed(() => allFirstLetters(manufacturers.value));

const userStore = useUserStore();
let selectedLetter = computed(() => userStore.GET_MANUFACTURER_LETTER());

const selectManufacturerLetter = (letter: string) => {
  userStore.SELECT_MANUFACTURER_LETTER(letter);
};

const isActiveLetter = (letter: string) => {
  return letter === selectedLetter.value;
};
</script>

<style scoped>
.active {
  @apply text-green-600 font-bold;
}
</style>
