import { render, screen } from '@testing-library/vue';

import { createTestingPinia } from '@pinia/testing';
import { createPinia, setActivePinia } from 'pinia';

import { useUserStore } from '@/stores/user';

import HomeView from '@/views/HomeView.vue';

const mockComponents = () => {
  vi.mock('@/components/Selection/ManufacturerLetterSelection.vue', () => ({
    default: {
      template:
        '<div data-testid="manufacturer-letter-selection">Mocked manufacturer letter selection component</div>',
    },
  }));

  vi.mock('@/components/Selection/ManufacturerSelection.vue', () => ({
    default: {
      template:
        '<div data-testid="manufacturer-selection">Mocked manufacturer selection component</div>',
    },
  }));

  vi.mock('@/components/CarListings/CarListingByManufacturer.vue', () => ({
    default: {
      template:
        '<div data-testid="car-listing-by-manufacturer">Mocked car listing by manufacturer component</div>',
    },
  }));

  vi.mock('@/components/Texts/HomeViewText.vue', () => ({
    default: {
      template: '<div data-testid="home-view-text">Mocked home view text component</div>',
    },
  }));
};

const renderHomeView = () => {
  const pinia = createTestingPinia();

  render(HomeView, {
    global: {
      plugins: [pinia],
    },
  });
};

describe('HomeView', () => {
  beforeEach(() => {
    mockComponents();
  });
  it('renders selection by letter', () => {
    renderHomeView();

    const ManufacturerLetterSelectionComponent = screen.getByTestId(
      'manufacturer-letter-selection',
    );

    expect(ManufacturerLetterSelectionComponent).toBeInTheDocument();
  });

  it('renders selection by manufacturer', () => {
    renderHomeView();

    const ManufacturerSelectionComponent = screen.getByTestId('manufacturer-selection');

    expect(ManufacturerSelectionComponent).toBeInTheDocument();
  });

  describe('if manufacturer is not selected by user', () => {
    it('renders home text', () => {
      renderHomeView();

      const HomeViewTextComponent = screen.getByTestId('home-view-text');

      expect(HomeViewTextComponent).toBeInTheDocument();
    });
  });

  describe('if manufacturer is selected by user', () => {
    it('renders car listings', () => {
      setActivePinia(createPinia());

      const userStore = useUserStore();
      userStore.SELECT_MANUFACTURER('Peugeot');

      render(HomeView);

      const CarListingByManufacturerComponent = screen.getByTestId('car-listing-by-manufacturer');

      expect(CarListingByManufacturerComponent).toBeInTheDocument();
    });
  });
});
