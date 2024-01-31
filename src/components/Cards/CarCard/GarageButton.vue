<template>
  <button
    :class="buttonClass"
    class="px-5 py-3 rounded font-medium text-white w-40 h-fit text-center"
    @mouseover="hoverText"
    @mouseleave="buttonText"
    @click="toggleGarage"
  >
    {{ text }}
  </button>
</template>

<script lang="ts" setup>
import { computed, ref, onMounted, watch } from 'vue';

import { useUserStore } from '@/stores/user';

const props = defineProps({
  carId: {
    type: String,
    required: true,
  },
});

const userStore = useUserStore();

const garage = computed(() => userStore.GET_GARAGE());
const owned = computed(() => garage.value.includes(props.carId));
const loggedIn = computed(() => userStore.isLoggedIn);

const loggedOutText = 'Sign in to use';
const ownedText = 'Owned';
const ownedHoverText = 'Remove';
const unowned = 'Not Owned';
const unownedHoverText = 'Add';

let text = ref('');

const hoverText = () => {
  text.value = owned.value ? ownedHoverText : unownedHoverText;
};
const buttonText = () => {
  if (!loggedIn.value) {
    text.value = loggedOutText;
  } else {
    text.value = owned.value ? ownedText : unowned;
  }
};

const toggleGarage = () => {
  if (owned.value) {
    userStore.REMOVE_FROM_GARAGE(props.carId);
  } else {
    userStore.ADD_TO_GARAGE(props.carId);
  }
  hoverText();
};

onMounted(buttonText);

watch(loggedIn, () => {
  buttonText();
});

const buttonClass = computed(() => {
  return {
    owned: owned.value && loggedIn.value,
    'not-owned': !owned.value && loggedIn.value,
    unlogged: !loggedIn.value,
  };
});
</script>

<style scoped>
.owned {
  @apply bg-green-500 hover:shadow-red hover:bg-red-500;
}

.not-owned {
  @apply bg-red-500 hover:shadow-green hover:bg-green-500;
}

.unlogged {
  @apply bg-gray-400 pointer-events-none;
}
</style>
