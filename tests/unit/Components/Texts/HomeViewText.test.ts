import { render, screen } from '@testing-library/vue';

import { createTestingPinia } from '@pinia/testing';

import { useUserStore } from '@/stores/user';

import HomeViewText from '@/components/Texts/HomeViewText.vue';

describe('HomeViewText', () => {
  describe('user is logged out', () => {
    it('renders start text', () => {
      const pinia = createTestingPinia();
      render(HomeViewText, {
        global: {
          plugins: [pinia],
        },
      });

      const text = screen.getByText(
        'Rev up your Forza Horizon 5 adventure with our game-changing service tailored just for you! Cruise through the ultimate selection of Forza Horizon 5 cars, from sleek speedsters to rugged off-road rides, and find the perfect wheels to match your style and speed dreams.',
      );

      expect(text).toBeInTheDocument();
    });
  });

  describe('user is logged in', () => {
    it('renders select manufacturer text', () => {
      const pinia = createTestingPinia();

      const userStore = useUserStore();
      userStore.isLoggedIn = true;

      render(HomeViewText, {
        global: {
          plugins: [pinia],
        },
      });

      const text = screen.getByRole('heading', {
        name: /select the manufacturer to see cars list/i,
      });

      expect(text).toBeInTheDocument();
    });
  });
});
