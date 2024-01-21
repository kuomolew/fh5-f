import { defineStore } from 'pinia';

import getManufacturers from '@/api/getManufacturers';

export interface ManufacturersState {
  manufacturers: string[];
}

export const useManufacturersStore = defineStore('cars', {
  state: (): ManufacturersState => ({
    manufacturers: [],
  }),
  actions: {
    async FETCH_MANUFACTURERS() {
      const manufacturers = await getManufacturers();
      this.manufacturers = manufacturers;
    },
  },

  getters: {
    FILTERED_MANUFACTURERS(state) {
      return state.manufacturers;
    },
  },
});
