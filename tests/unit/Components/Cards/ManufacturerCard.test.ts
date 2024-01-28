import { render, screen } from '@testing-library/vue';

import ManufacturerCard from '@/components/Cards/ManufacturerCard.vue';

const renderManufacturerCard = () => {
  render(ManufacturerCard, {
    props: {
      manufacturer: 'Peugeot',
      isActive: true,
    },
  });
};

describe('ManufacturerCard', () => {
  it('renders manufacturer name', () => {
    renderManufacturerCard();
    const button = screen.getByRole('button', {
      name: /peugeot/i,
    });

    expect(button).toBeInTheDocument();
  });

  it('applies active class', () => {
    renderManufacturerCard();
    const button = screen.getByRole('button', {
      name: /peugeot/i,
    });

    expect(button).toHaveClass('active');
  });
});
