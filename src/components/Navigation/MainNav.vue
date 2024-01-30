<template>
  <header class="z-20 relative w-full text-sm h-16">
    <div class="fixed top-0 left-0 w-full bg-white h-16">
      <div class="flex flex-nowrap h-full border-b border-solid border-gray-200 px-8 mx-auto">
        <router-link :to="{ name: 'Home' }" class="flex h-full items-center text-xl font-semibold">
          Forza Auction Helper
        </router-link>
        <nav class="ml-24 h-full">
          <ul class="flex h-full list-none">
            <li v-for="menuItem in menuItems" :key="menuItem.text" class="h-full ml-9 first:ml-0">
              <router-link
                :to="{ name: menuItem.url }"
                class="flex h-full items-center py-2.5 text-lg"
              >
                {{ menuItem.text }}
              </router-link>
            </li>
          </ul>
        </nav>
        <div class="ml-auto flex h-full items-center py-2.5">
          <profile-image v-if="isLoggedIn" />
          <action-button v-else :text="'Sign in'" @click="LOGIN_USER" />
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';

import { useUserStore } from '@/stores/user';

import ActionButton from '@/components/Shared/ActionButton.vue';
import ProfileImage from '@/components/Navigation/ProfileImage.vue';

const menuItems = ref([
  {
    text: 'My Garage',
    url: 'MyGarage',
  },
]);

const userStore = useUserStore();

const isLoggedIn = computed(() => userStore.isLoggedIn);
const LOGIN_USER = userStore.LOGIN_USER;
</script>
