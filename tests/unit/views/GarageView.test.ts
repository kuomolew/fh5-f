import { render, screen } from '@testing-library/vue';

import { createTestingPinia } from '@pinia/testing';

import { useUserStore } from '@/stores/user';

import GarageView from '@/views/GarageView.vue';

const mockComponents = () => {
  vi.mock('@/components/Texts/GarageViewText.vue', () => ({
    default: {
      template: '<div data-testid="garage-view-text">Mocked garage view text component</div>',
    },
  }));
};

describe('GarageView', () => {
  beforeEach(() => {
    mockComponents();
  });

  describe('when user is logged out', () => {
    it('shows garage view text', () => {
      const pinia = createTestingPinia();

      const userStore = useUserStore();
      userStore.isLoggedIn = false;
      render(GarageView, {
        global: {
          plugins: [pinia],
        },
      });

      const GarageViewTextComponent = screen.getByTestId('garage-view-text');

      expect(GarageViewTextComponent).toBeInTheDocument();
    });
  });
});
