import { render, screen } from '@testing-library/vue';
import { createTestingPinia } from '@pinia/testing';
import { createPinia, setActivePinia } from 'pinia';

import userEvent from '@testing-library/user-event';

import ManufacturerLetterSelection from '@/components/Selection/ManufacturerLetterSelection.vue';
import { useUserStore } from '@/stores/user';
import { useManufacturersStore } from '@/stores/manufacturers';

describe('ManufacturerLetterSelection', () => {
  it('renders title', () => {
    const pinia = createTestingPinia();
    render(ManufacturerLetterSelection, {
      global: {
        plugins: [pinia],
      },
      props: {
        manufacturers: [],
      },
    });
    const title = screen.getByText(/select manufacturer:/i);

    expect(title).toBeInTheDocument();
  });

  it('renders navigation buttons', async () => {
    const pinia = createTestingPinia();
    const manufacturers = ['Acura', 'Aston Martin', 'Bugatti', 'Peugeot'];
    const manufacturersStore = useManufacturersStore();
    manufacturersStore.manufacturers = [...manufacturers];

    render(ManufacturerLetterSelection, {
      global: {
        plugins: [pinia],
      },
      props: {
        manufacturers: manufacturers,
      },
    });

    const manufacturerLetterItems = await screen.findAllByRole('button');
    const manufacturerLetterTexts = manufacturerLetterItems.map((item) => item.textContent);

    expect(manufacturerLetterTexts).toEqual([' All ', ' A ', ' B ', ' P ']);
  });

  describe('when user clicks the letter', () => {
    it('sends selected letter to user store', async () => {
      const pinia = createTestingPinia();
      const manufacturers = ['Peugeot'];
      const manufacturersStore = useManufacturersStore();
      manufacturersStore.manufacturers = [...manufacturers];

      render(ManufacturerLetterSelection, {
        global: {
          plugins: [pinia],
        },
        props: {
          manufacturers: manufacturers,
        },
      });
      const userStore = useUserStore();

      const manufacturerLetterItem = await screen.findByRole('button', {
        name: 'P',
      });

      await userEvent.click(manufacturerLetterItem);

      expect(userStore.SELECT_MANUFACTURER_LETTER).toHaveBeenCalledWith('P');
    });

    it('applies active styles to selected letter', async () => {
      setActivePinia(createPinia());
      const manufacturers = ['Acura'];

      const userStore = useUserStore();
      userStore.SELECT_MANUFACTURER_LETTER('A');

      render(ManufacturerLetterSelection, {
        props: {
          manufacturers: manufacturers,
        },
      });

      const manufacturerLetterItem = await screen.findByRole('button', {
        name: '[ A ]',
      });

      expect(manufacturerLetterItem).toHaveClass('active');
    });
  });
});
