import { render, screen } from '@testing-library/vue';

import CarRarity from '@/components/Cards/CarCard/CarRarity.vue';

const renderCarRarity = (rarity: string) => {
  render(CarRarity, {
    props: {
      rarity,
    },
  });
};

describe('CarRarity', () => {
  it('renders text', () => {
    renderCarRarity('Very Rare');
    const title = screen.getByRole('heading', {
      name: /very rare/i,
    });

    expect(title).toBeInTheDocument();
  });

  it('applies classes', () => {
    renderCarRarity('Very Rare');
    const component = screen.getByTestId('car-card-rarity-div');

    expect(component).toHaveClass('very-rare');
  });
});
