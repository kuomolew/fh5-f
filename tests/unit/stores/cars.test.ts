import { createPinia, setActivePinia } from 'pinia';
import type { Mock } from 'vitest';

import axios from 'axios';

import type { Car } from '@/api/types';
import { useCarsStore } from '@/stores/cars';
import { useUserStore } from '@/stores/user';
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

  describe('INCLUDE_CAR_BY_MANUFACTURER', () => {
    describe('when none manufacturer was selected', () => {
      it('includes none of cars', () => {
        const car1 = createCar({ manufacturer: 'Nissan' });
        const car2 = createCar();
        const car3 = createCar({ manufacturer: 'Mitsubishi' });

        const cars: Car[] = [car1, car2, car3];

        const userStore = useUserStore();
        userStore.selectedManufacturer = '';

        const store = useCarsStore();

        const result: boolean[] = [];

        cars.forEach((car) => result.push(store.INCLUDE_CAR_BY_MANUFACTURER(car)));

        expect(result).toEqual([false, false, false]);
      });
    });

    describe('when exact manufacturer was selected', () => {
      it('includes cars from that manufacturer only', () => {
        const car1 = createCar({ manufacturer: 'Nissan' });
        const car2 = createCar({ manufacturer: 'Peugeot' });
        const car3 = createCar({ manufacturer: 'Mitsubishi' });
        const car4 = createCar({ manufacturer: 'Peugeot' });

        const cars: Car[] = [car1, car2, car3, car4];

        const userStore = useUserStore();
        userStore.selectedManufacturer = 'Peugeot';

        const store = useCarsStore();

        const result: boolean[] = [];

        cars.forEach((car) => result.push(store.INCLUDE_CAR_BY_MANUFACTURER(car)));

        expect(result).toEqual([false, true, false, true]);
      });
    });
  });

  describe('FILTERED_CARS', () => {
    it('gets all filtered cars', () => {
      const car1 = createCar({ manufacturer: 'Nissan' });
      const car2 = createCar();

      const userStore = useUserStore();
      userStore.selectedManufacturer = 'Nissan';

      const store = useCarsStore();
      store.cars.push(car1, car2);

      expect(store.FILTERED_CARS).toEqual([car1]);
    });
  });

  describe('ALL_CARS', () => {
    it('gets all cars', () => {
      const car1 = createCar();
      const car2 = createCar();
      const store = useCarsStore();
      store.cars.push(car1, car2);

      expect(store.ALL_CARS).toEqual([car1, car2]);
    });
  });
});
