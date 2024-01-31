import { createPinia, setActivePinia } from 'pinia';
import type { Mock } from 'vitest';

import axios from 'axios';

import { useUserStore } from '@/stores/user';

vi.mock('axios');
const axiosGetMock = axios.get as Mock;

describe('state', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('keeps track if user is logged in', () => {
    const store = useUserStore();

    expect(store.isLoggedIn).toBe(false);
  });

  it('keeps track selected by user manufacturer letter', () => {
    const store = useUserStore();

    expect(store.selectedManufacturerLetter).toBe('All');
  });

  it('keeps track selected by user manufacturer', () => {
    const store = useUserStore();

    expect(store.selectedManufacturer).toBe('');
  });

  it('keeps track users garage', () => {
    const store = useUserStore();

    expect(store.garage).toEqual(new Set());
  });
});

describe('actions', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  describe('LOGIN_USER', () => {
    it('logs user in', () => {
      const store = useUserStore();

      store.LOGIN_USER();
      expect(store.isLoggedIn).toBe(true);
    });
  });

  describe('SELECT_MANUFACTURER_LETTER', () => {
    it('updates selected by user manufacturer letter', () => {
      const store = useUserStore();

      store.SELECT_MANUFACTURER_LETTER('All');
      expect(store.selectedManufacturerLetter).toBe('All');
    });
  });

  describe('SELECT_MANUFACTURER', () => {
    it('updates selected by user manufacturer', () => {
      const store = useUserStore();

      store.SELECT_MANUFACTURER('Peugeot');
      expect(store.selectedManufacturer).toBe('Peugeot');
    });
  });

  describe('RESET_MANUFACTURER', () => {
    it('resets selected by user manufacturer to empty string', () => {
      const store = useUserStore();

      store.SELECT_MANUFACTURER('Peugeot');
      store.RESET_MANUFACTURER();
      expect(store.selectedManufacturer).toBe('');
    });
  });

  describe('FETCH_GARAGE', () => {
    it('makes api request and stores received car ids', async () => {
      const garage = { garage: ['My new Car'] };
      axiosGetMock.mockResolvedValue({ data: garage });

      const store = useUserStore();
      await store.FETCH_GARAGE();

      const setGarage = new Set();
      setGarage.add('My new Car');

      expect(store.garage).toEqual(setGarage);
    });
  });

  describe('ADD_TO_GARAGE', () => {
    it('adds car id to garage', async () => {
      const store = useUserStore();
      store.ADD_TO_GARAGE('Peugeot');

      const setGarage = new Set();
      setGarage.add('Peugeot');

      expect(store.garage).toEqual(setGarage);
    });
  });

  describe('REMOVE_FROM_GARAGE', () => {
    it('removes selected car id from garage', async () => {
      const store = useUserStore();
      store.garage.add('Peugeot');
      store.REMOVE_FROM_GARAGE('Peugeot');

      expect(store.garage).toEqual(new Set());
    });
  });
});

describe('getters', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  describe('GET_MANUFACTURER_LETTER', () => {
    it('provides selected by user manufacturer letter', () => {
      const store = useUserStore();
      store.selectedManufacturerLetter = 'All';

      const request = store.GET_MANUFACTURER_LETTER();

      expect(request).toBe('All');
    });
  });

  describe('GET_MANUFACTURER', () => {
    it('provides selected by user manufacturer', () => {
      const store = useUserStore();
      store.selectedManufacturer = 'Peugeot';

      const request = store.GET_MANUFACTURER();

      expect(request).toBe('Peugeot');
    });
  });

  describe('GET_GARAGE', () => {
    it('provides all sorted car ids from garage', async () => {
      const store = useUserStore();
      store.garage.add('Peugeot');
      store.garage.add('Mitsubishi');
      const result = store.GET_GARAGE();

      expect(result).toEqual(['Mitsubishi', 'Peugeot']);
    });
  });
});
