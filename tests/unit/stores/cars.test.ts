import { createPinia, setActivePinia } from 'pinia';
import type { Mock } from 'vitest';

import axios from 'axios';

import { useCarsStore } from '@/stores/cars';
import { createCar } from '../../utils/createCar';

vi.mock('axios');
const axiosGetMock = axios.get as Mock;

describe('state', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('stores cars listings', () => {
    const store = useCarsStore();
    expect(store.cars).toEqual([]);
  });
});

describe('actions', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  describe('FETCH_CARS', () => {
    it('makes api request and stores received cars', async () => {
      const car = createCar();
      axiosGetMock.mockResolvedValue({ data: [car] });

      const store = useCarsStore();
      await store.FETCH_CARS();

      expect(store.cars).toEqual([car]);
    });
  });
});

describe('getters', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  describe('FILTERED_CARS', () => {
    it('gets all filtered cars', () => {
      const car1 = createCar();
      const car2 = createCar();
      const store = useCarsStore();
      store.cars.push(car1, car2);

      expect(store.FILTERED_CARS).toEqual([car1, car2]);
    });
  });
});
