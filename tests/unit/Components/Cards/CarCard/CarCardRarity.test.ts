import { render, screen } from '@testing-library/vue';

import CarCardRarity from '@/components/Cards/CarCard/CarCardRarity.vue';

const renderCarCardRarity = (rarity: string) => {
  render(CarCardRarity, {
    props: {
      rarity,
    },
  });
};

describe('CarCardRarity', () => {
  it('renders text', () => {
    renderCarCardRarity('Very Rare');
    const title = screen.getByRole('heading', {
      name: /very rare/i,
    });

    expect(title).toBeInTheDocument();
  });

  it('applies classes', () => {
    renderCarCardRarity('Very Rare');
    const component = screen.getByTestId('car-card-rarity-div');

    expect(component).toHaveClass('very-rare');
  });
});
