import { defineStore } from 'pinia';

import getManufacturers from '@/api/getManufacturers';

import { useUserStore } from '@/stores/user';

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
    INCLUDE_MANUFACTURER_BY_LETTER: () => (manufacturer: String) => {
      const userStore = useUserStore();
      const manufacturerFirstLetter = manufacturer[0].toUpperCase();

      if (userStore.selectedManufacturerLetter === 'All') return true;
      if (userStore.selectedManufacturerLetter.length === 0) return false;

      return userStore.selectedManufacturerLetter === manufacturerFirstLetter;
    },

    FILTERED_MANUFACTURERS(state): string[] {
      return state.manufacturers
        .filter((manufacturer) => this.INCLUDE_MANUFACTURER_BY_LETTER(manufacturer))
        .sort((a, b) => a.localeCompare(b));
    },

    ALL_MANUFACTURERS(state): string[] {
      return state.manufacturers.sort((a, b) => a.localeCompare(b));
    },
  },
});
