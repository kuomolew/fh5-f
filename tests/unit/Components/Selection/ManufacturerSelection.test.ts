import { render, screen } from '@testing-library/vue';
import { createTestingPinia } from '@pinia/testing';

import ManufacturerSelection from '@/components/Selection/ManufacturerSelection.vue';
import { useManufacturersStore } from '@/stores/manufacturers';

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
});
