import { defineStore } from 'pinia';

import type { Car } from '@/api/types';
import getCars from '@/api/getCars';
import { useUserStore } from '@/stores/user';

export interface CarsState {
  cars: Car[];
}

export const useCarsStore = defineStore('cars', {
  state: (): CarsState => ({
    cars: [],
  }),

  actions: {
    async FETCH_CARS() {
      const cars = await getCars();
      this.cars = cars;
      console.log('FETCH_CARS');
    },
  },

  getters: {
    INCLUDE_CAR_BY_MANUFACTURER: () => (car: Car) => {
      const userStore = useUserStore();

      if (userStore.selectedManufacturer.length === 0) return false;
      return userStore.selectedManufacturer === car.manufacturer;
    },

    FILTERED_CARS_BY_MANUFACTURER(state): Car[] {
      return state.cars.filter((car) => this.INCLUDE_CAR_BY_MANUFACTURER(car));
    },

    ALL_CARS(state): Car[] {
      return state.cars;
    },
  },
});
