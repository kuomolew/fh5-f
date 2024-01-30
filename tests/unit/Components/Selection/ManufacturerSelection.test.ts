import { render, screen } from '@testing-library/vue';
import { createTestingPinia } from '@pinia/testing';
import userEvent from '@testing-library/user-event';

import ManufacturerSelection from '@/components/Selection/ManufacturerSelection.vue';
import { useManufacturersStore } from '@/stores/manufacturers';
import { useUserStore } from '@/stores/user';

declare global {
  interface Window {
    originalScrollTo: typeof window.scrollTo;
  }
}

const renderManufacturerSelection = () => {
  const pinia = createTestingPinia();

  render(ManufacturerSelection, {
    global: {
      plugins: [pinia],
    },
  });
};

describe('ManufacturerSelection', () => {
  it('renders title', () => {
    renderManufacturerSelection();
    const title = screen.getByText(/make:/i);

    expect(title).toBeInTheDocument();
  });

  it('renders manufacturer card', async () => {
    renderManufacturerSelection();
    const manufacturers = ['Acura', 'Aston Martin', 'Bugatti', 'Peugeot'];
    const manufacturersStore = useManufacturersStore();
    manufacturersStore.manufacturers = [...manufacturers];

    const manufacturerButtons = await screen.findAllByRole('button');
    const manufacturerButtonTexts = manufacturerButtons.map((item) => item.textContent);

    expect(manufacturerButtonTexts).toEqual(manufacturers);
  });

  describe('when user clicks the card', () => {
    beforeEach(() => {
      window.originalScrollTo = window.scrollTo;
      window.scrollTo = () => {};
    });

    afterEach(() => {
      window.scrollTo = window.originalScrollTo;
    });

    it('adds clicked manufacturer to selected', async () => {
      renderManufacturerSelection();

      const manufacturers = ['Acura', 'Aston Martin', 'Bugatti', 'Peugeot'];
      const manufacturersStore = useManufacturersStore();
      manufacturersStore.manufacturers = [...manufacturers];

      const userStore = useUserStore();

      const manufacturerItem = await screen.findByRole('button', {
        name: 'Peugeot',
      });

      await userEvent.click(manufacturerItem);

      expect(userStore.SELECT_MANUFACTURER).toHaveBeenCalledWith('Peugeot');
    });
  });
});
