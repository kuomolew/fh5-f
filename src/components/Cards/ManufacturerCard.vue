<template>
  <button :class="{ active: isActive }">
    {{ manufacturer }}
  </button>
</template>

<script lang="ts" setup>
defineProps({
  manufacturer: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
button {
  @apply px-5 py-3 my-4 font-medium rounded text-white bg-green-500 hover:shadow-green;
}

.active {
  @apply bg-white text-green-500 border border-green-500 rounded hover:shadow-none;
}
</style>
