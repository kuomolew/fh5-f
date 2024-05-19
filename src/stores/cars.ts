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
    INCLUDE_CAR_BY_SELECTED_MANUFACTURER: () => (car: Car) => {
      const userStore = useUserStore();

      if (userStore.selectedManufacturer.length === 0) return false;
      return userStore.selectedManufacturer === car.manufacturer;
    },

    FILTERED_CARS_BY_MANUFACTURER(state): Car[] {
      return state.cars.filter((car) => this.INCLUDE_CAR_BY_SELECTED_MANUFACTURER(car));
    },

    ALL_CARS(state): Car[] {
      return state.cars;
    },

    GARAGE_CARS(state): Car[] {
      const userStore = useUserStore();
      const garage = userStore.GET_GARAGE();

      const cars: Car[] = [];

      state.cars.forEach((car) => {
        if (garage.includes(car.id)) {
          cars.push(car);
        }
      });

      return cars;
    },

    FILTERED_GARAGE_CARS_BY_MANUFACTURER(): Car[] {
      return this.GARAGE_CARS.filter((car) => this.INCLUDE_CAR_BY_SELECTED_MANUFACTURER(car));
    },
  },
});
