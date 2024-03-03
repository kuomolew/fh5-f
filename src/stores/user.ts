import { defineStore } from 'pinia';
import { ref } from 'vue';

import getGarage from '@/api/getGarage';

export const useUserStore = defineStore('user', () => {
  const isLoggedIn = ref(true);
  const selectedManufacturerLetter = ref('All');
  const selectedManufacturer = ref('');
  const garage = ref(new Set<string>());

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

  const FETCH_GARAGE = async () => {
    const cars = await getGarage();
    cars.forEach((item) => {
      garage.value.add(item);
    });
    console.log('FETCH_GARAGE');
  };

  const ADD_TO_GARAGE = (carId: string) => {
    garage.value.add(carId);
  };

  const REMOVE_FROM_GARAGE = (carId: string) => {
    garage.value.delete(carId);
  };

  const GET_MANUFACTURER_LETTER = () => {
    return selectedManufacturerLetter.value;
  };

  const GET_MANUFACTURER = () => {
    return selectedManufacturer.value;
  };

  const GET_GARAGE = () => {
    return Array.from(garage.value).sort((a, b) => a.localeCompare(b));
  };

  return {
    isLoggedIn,
    selectedManufacturerLetter,
    selectedManufacturer,
    garage,
    LOGIN_USER,
    SELECT_MANUFACTURER_LETTER,
    SELECT_MANUFACTURER,
    RESET_MANUFACTURER,
    FETCH_GARAGE,
    ADD_TO_GARAGE,
    REMOVE_FROM_GARAGE,
    GET_MANUFACTURER_LETTER,
    GET_MANUFACTURER,
    GET_GARAGE,
  };
});
