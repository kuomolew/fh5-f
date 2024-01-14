<template>
  <button :class="buttonClass">
    {{ text }}
  </button>
</template>

<script lang="ts" setup>
import { computed, toRefs } from 'vue';

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'primary',
    validator(value: string) {
      return ['primary', 'secondary'].includes(value);
    },
  },
});

const { type } = toRefs(props);

const buttonClass = computed(() => {
  return { [type.value]: true };
});
</script>

<style scoped>
button {
  @apply px-5 py-3 font-medium;
}

.primary {
  @apply rounded text-white bg-green-500 hover:shadow-green;
}

.secondary {
  @apply bg-transparent text-green-500 hover:bg-green-400 hover:text-white;
}
</style>
