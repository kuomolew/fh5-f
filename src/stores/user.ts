import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
  const isLoggedIn = ref(false);
  const selectedManufacturerLetter = ref('All');

  const LOGIN_USER = () => {
    isLoggedIn.value = true;
  };

  const SELECT_MANUFACTURER_LETTER = (letter: string) => {
    selectedManufacturerLetter.value = letter;
  };

  const GET_MANUFACTURER_LETTER = () => {
    return selectedManufacturerLetter.value;
  };

  return {
    isLoggedIn,
    selectedManufacturerLetter,
    LOGIN_USER,
    SELECT_MANUFACTURER_LETTER,
    GET_MANUFACTURER_LETTER,
  };
});
