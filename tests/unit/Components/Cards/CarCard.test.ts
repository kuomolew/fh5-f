import { render, screen } from '@testing-library/vue';

import CarCard from '@/components/Cards/CarCard.vue';

import type { Car } from '@/api/types';
import { createCar } from '../../../utils/createCar';

const renderCarCard = (car: Car) => {
  render(CarCard, {
    props: {
      car: car,
    },
  });
};

describe('CarCard', () => {
  it('renders car id', () => {
    const car = createCar({ id: 'Peugot 207' });
    renderCarCard(car);

    const title = screen.getByRole('heading', {
      name: /peugot 207/i,
    });

    expect(title).toBeInTheDocument();
  });
});
