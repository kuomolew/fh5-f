<template>
  <main>
    <garage-view-text v-if="!loggedIn" />
  </main>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

import { useUserStore } from '@/stores/user';

import GarageViewText from '@/components/Texts/GarageViewText.vue';

const userStore = useUserStore();

const loggedIn = computed(() => userStore.isLoggedIn);
</script>
