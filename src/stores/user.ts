import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
  const isLoggedIn = ref(false);
  const selectedManufacturerLetter = ref('All');
  const selectedManufacturer = ref('');

  const LOGIN_USER = () => {
    isLoggedIn.value = true;
  };

  const SELECT_MANUFACTURER_LETTER = (letter: string) => {
    selectedManufacturerLetter.value = letter;
  };

  const SELECT_MANUFACTURER = (manufacturer: string) => {
    selectedManufacturer.value = manufacturer;
  };

  const RESET_MANUFACTURER = () => {
    selectedManufacturer.value = '';
  };

  const GET_MANUFACTURER_LETTER = () => {
    return selectedManufacturerLetter.value;
  };

  const GET_MANUFACTURER = () => {
    return selectedManufacturer.value;
  };

  return {
    isLoggedIn,
    selectedManufacturerLetter,
    selectedManufacturer,
    LOGIN_USER,
    SELECT_MANUFACTURER_LETTER,
    SELECT_MANUFACTURER,
    RESET_MANUFACTURER,
    GET_MANUFACTURER_LETTER,
    GET_MANUFACTURER,
  };
});
