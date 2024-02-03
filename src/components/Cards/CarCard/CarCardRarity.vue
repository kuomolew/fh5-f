<template>
  <div
    :class="rarityClass"
    class="absolute w-20 top-0 left-0 py-1"
    data-testid="car-card-rarity-div"
  >
    <h3 class="w-full text-center text-sm font-medium">
      {{ rarity }}
    </h3>
  </div>
</template>

<script lang="ts" setup>
import { computed, toRefs, ref } from 'vue';

import kebabize from '@/utils/kebabize';

const props = defineProps({
  rarity: {
    type: String,
    required: true,
  },
});

const { rarity } = toRefs(props);
let kebabRarity = ref(kebabize(rarity.value));

const rarityClass = computed(() => {
  return { [kebabRarity.value]: true };
});
</script>

<style scoped>
.common {
  @apply bg-opacity-green-500;
}

.rare {
  @apply bg-opacity-blue-500;
}

.legendary {
  @apply bg-opacity-yellow-500;
}

.epic {
  @apply bg-opacity-violet-500;
}

.forza-edition {
  @apply bg-opacity-red-500;
}

.anniversary-edition {
  @apply bg-opacity-pink-500;
}

.donut-edition {
  @apply bg-opacity-lime-500;
}
</style>
