import { createPinia, setActivePinia } from 'pinia';
import type { Mock } from 'vitest';

import axios from 'axios';

import { useManufacturersStore } from '@/stores/manufacturers';

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

  describe('FILTERED_MANUFACTURERS', () => {
    it('gets all filtered manufacturers', () => {
      const manufacturer1 = 'Xpeng';
      const manufacturer2 = 'Zenvo';
      const store = useManufacturersStore();
      store.manufacturers.push(manufacturer1, manufacturer2);

      expect(store.FILTERED_MANUFACTURERS).toEqual(['Xpeng', 'Zenvo']);
    });
  });
});
