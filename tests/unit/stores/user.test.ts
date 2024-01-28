import { createPinia, setActivePinia } from 'pinia';

import { useUserStore } from '@/stores/user';

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
});
