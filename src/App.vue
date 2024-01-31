<template>
  <main-nav />
  <router-view />
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';

import { useManufacturersStore } from '@/stores/manufacturers';
import { useCarsStore } from '@/stores/cars';
import { useUserStore } from '@/stores/user';

import MainNav from '@/components/Navigation/MainNav.vue';

const manufacturersStore = useManufacturersStore();
onMounted(manufacturersStore.FETCH_MANUFACTURERS);

const carsStore = useCarsStore();
onMounted(carsStore.FETCH_CARS);

const userStore = useUserStore();
onMounted(userStore.FETCH_GARAGE);
</script>
