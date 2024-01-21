import { defineStore } from 'pinia';

import getCars from '@/api/getCars';

import type { Car } from '@/api/types';

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
    },
  },

  getters: {
    FILTERED_CARS(state): Car[] {
      return state.cars;
    },
  },
});
