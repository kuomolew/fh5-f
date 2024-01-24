import { createPinia, setActivePinia } from 'pinia';
import type { Mock } from 'vitest';

import axios from 'axios';

import { useManufacturersStore } from '@/stores/manufacturers';
import { useUserStore } from '@/stores/user';

vi.mock('axios');
const axiosGetMock = axios.get as Mock;

describe('state', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('stores manufacturers listings', () => {
    const store = useManufacturersStore();
    expect(store.manufacturers).toEqual([]);
  });
});

describe('actions', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  describe('FETCH_MANUFACTURERS', () => {
    it('makes api request and stores received manufacturers', async () => {
      const manufacturers = ['Xpeng', 'Zenvo'];
      axiosGetMock.mockResolvedValue({ data: ['Xpeng', 'Zenvo'] });

      const store = useManufacturersStore();
      await store.FETCH_MANUFACTURERS();

      expect(store.manufacturers).toEqual(manufacturers);
    });
  });
});

describe('getters', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  describe('INCLUDE_MANUFACTURER_BY_LETTER', () => {
    describe('when user selected all letters', () => {
      it('includes all manufacturers', () => {
        const userStore = useUserStore();
        userStore.selectedManufacturerLetter = 'All';

        const manufacturers = ['Acura', 'Honda', 'Mitsubishi'];

        const store = useManufacturersStore();

        const result: boolean[] = [];

        manufacturers.forEach((manufacturer) =>
          result.push(store.INCLUDE_MANUFACTURER_BY_LETTER(manufacturer)),
        );

        expect(result).toEqual([true, true, true]);
      });
    });

    describe('when none letter was selected', () => {
      it('includes all manufacturers', () => {
        const userStore = useUserStore();
        userStore.selectedManufacturerLetter = '';

        const manufacturers = ['Acura', 'Honda', 'Mitsubishi'];

        const store = useManufacturersStore();

        const result: boolean[] = [];

        manufacturers.forEach((manufacturer) =>
          result.push(store.INCLUDE_MANUFACTURER_BY_LETTER(manufacturer)),
        );

        expect(result).toEqual([true, true, true]);
      });
    });

    describe('when nuser selected some letter', () => {
      it('includes only manufacturers started with selected letter', () => {
        const userStore = useUserStore();
        userStore.selectedManufacturerLetter = 'A';

        const manufacturers = ['Acura', 'Honda', 'Mitsubishi'];
        const store = useManufacturersStore();
        const result: boolean[] = [];

        manufacturers.forEach((manufacturer) =>
          result.push(store.INCLUDE_MANUFACTURER_BY_LETTER(manufacturer)),
        );

        expect(result).toEqual([true, false, false]);
      });
    });
  });

  describe('FILTERED_MANUFACTURERS', () => {
    it('gets all filtered manufacturers', () => {
      const manufacturer1 = 'Xpeng';
      const manufacturer2 = 'Zenvo';
      const store = useManufacturersStore();
      store.manufacturers.push(manufacturer1, manufacturer2);

      expect(store.FILTERED_MANUFACTURERS).toEqual(['Xpeng', 'Zenvo']);
    });

    it('sorts all filtered manufacturers', () => {
      const manufacturer1 = 'Xpeng';
      const manufacturer2 = 'Zenvo';
      const manufacturer3 = 'Acura';
      const store = useManufacturersStore();
      store.manufacturers.push(manufacturer1, manufacturer2, manufacturer3);

      expect(store.FILTERED_MANUFACTURERS).toEqual(['Acura', 'Xpeng', 'Zenvo']);
    });
  });

  describe('ALL_MANUFACTURERS', () => {
    it('gets all manufacturers', () => {
      const manufacturer1 = 'Xpeng';
      const manufacturer2 = 'Zenvo';
      const store = useManufacturersStore();
      store.manufacturers.push(manufacturer1, manufacturer2);

      expect(store.ALL_MANUFACTURERS).toEqual(['Xpeng', 'Zenvo']);
    });

    it('sorts all manufacturers', () => {
      const manufacturer1 = 'Xpeng';
      const manufacturer2 = 'Zenvo';
      const manufacturer3 = 'Acura';
      const store = useManufacturersStore();
      store.manufacturers.push(manufacturer1, manufacturer2, manufacturer3);

      expect(store.ALL_MANUFACTURERS).toEqual(['Acura', 'Xpeng', 'Zenvo']);
    });
  });
});
