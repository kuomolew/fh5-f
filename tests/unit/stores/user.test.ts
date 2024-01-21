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

    expect(store.selectedManufacturerLetter).toBe('');
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
});
