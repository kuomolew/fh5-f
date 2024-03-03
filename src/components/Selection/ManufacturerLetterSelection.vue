<template>
  <div class="w-full px-8 pt-2 pb-4 border-b border-solid border-gray-200">
    <h3 class="w-full text-center mb-2 font-semibold text-xl">Select Manufacturer:</h3>
    <div class="flex flex-wrap justify-between w-full">
      <button
        v-for="letter of manufacturerLetters"
        :key="letter"
        :class="{ active: isLetterSelected(letter) }"
        class="cursor-pointer w-10"
        @click="selectManufacturerLetter(letter)"
      >
        <span v-if="isLetterSelected(letter)">[</span>
        {{ letter }}
        <span v-if="isLetterSelected(letter)">]</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, toRefs } from 'vue';

import { useUserStore } from '@/stores/user';

import allFirstLetters from '@/utils/allFirstLetters';

const props = defineProps({
  manufacturers: {
    type: Array as () => string[],
    required: true,
  },
});

const { manufacturers } = toRefs(props);

let manufacturerLetters = computed(() => allFirstLetters(manufacturers.value));

const userStore = useUserStore();
let selectedLetter = computed(() => userStore.GET_MANUFACTURER_LETTER());

const selectManufacturerLetter = (letter: string) => {
  userStore.SELECT_MANUFACTURER_LETTER(letter);
  userStore.RESET_MANUFACTURER();
};

let isLetterSelected = (letter: string) => {
  return letter === selectedLetter.value;
};
</script>

<style scoped>
.active {
  @apply text-green-600 font-bold;
}
</style>
