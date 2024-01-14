import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
  const isLoggedIn = ref(false);

  const LOGIN_USER = () => {
    isLoggedIn.value = true;
  };

  return {
    isLoggedIn,
    LOGIN_USER,
  };
});
