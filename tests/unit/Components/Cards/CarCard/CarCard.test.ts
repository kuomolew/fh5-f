import { render, screen } from '@testing-library/vue';
import { createTestingPinia } from '@pinia/testing';

import CarCard from '@/components/Cards/CarCard/CarCard.vue';

import type { Car } from '@/api/types';
import { createCar } from '../../../../utils/createCar';

const renderCarCard = (car: Car) => {
  const pinia = createTestingPinia();

  render(CarCard, {
    props: {
      car: car,
    },
    global: {
      plugins: [pinia],
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

  it('renders car manufacturer', () => {
    const car = createCar({ manufacturer: 'Very Custom Manufacturer' });
    renderCarCard(car);

    const manufacturer = screen.getByRole('heading', {
      name: /very custom manufacturer/i,
    });

    expect(manufacturer).toBeInTheDocument();
  });

  it('renders car model', () => {
    const car = createCar({ model: 'Very Custom Model' });
    renderCarCard(car);

    const model = screen.getByRole('heading', {
      name: /very custom model/i,
    });

    expect(model).toBeInTheDocument();
  });

  it('renders car image', () => {
    const car = createCar({ id: 'Some ID will up as alt text' });
    renderCarCard(car);

    const image = screen.getByRole('img', {
      name: /some id will up as alt text/i,
    });

    expect(image).toBeInTheDocument();
  });

  it('renders car year', () => {
    const car = createCar({ year: 1234567890 });
    renderCarCard(car);

    const year = screen.getByRole('heading', {
      name: /1234567890/i,
    });

    expect(year).toBeInTheDocument();
  });

  it('renders car country', () => {
    const car = createCar({ country: 'Random Country' });
    renderCarCard(car);

    const country = screen.getByRole('img', {
      name: /random country/i,
    });

    expect(country).toBeInTheDocument();
  });

  it('renders car type', () => {
    const car = createCar({ type: 'Random Type' });
    renderCarCard(car);

    const type = screen.getByRole('heading', {
      name: /random type/i,
    });

    expect(type).toBeInTheDocument();
  });

  it('renders car rarity', () => {
    const car = createCar({ rarity: 'Random Rarity' });
    renderCarCard(car);

    const rarity = screen.getByRole('heading', {
      name: /random rarity/i,
    });

    expect(rarity).toBeInTheDocument();
  });

  it('renders car classification', () => {
    const car = createCar({ classification: 'Random Classification' });
    renderCarCard(car);

    const classification = screen.getByRole('heading', {
      name: /random classification/i,
    });

    expect(classification).toBeInTheDocument();
  });

  it('renders car value', () => {
    const car = createCar({ value: 'Random Value' });
    renderCarCard(car);

    const value = screen.getByRole('heading', {
      name: /random value/i,
    });

    expect(value).toBeInTheDocument();
  });

  it('tells that car is not listed at autoshow in case of', () => {
    const car = createCar({ autoshow: false });
    renderCarCard(car);

    const autoshow = screen.getByRole('heading', {
      name: /not listed at autoshow/i,
    });

    expect(autoshow).toBeInTheDocument();
  });

  it('renders car dlc', () => {
    const car = createCar({ dlc: 'Random DLC' });
    renderCarCard(car);

    const dlc = screen.getByRole('heading', {
      name: /random dlc/i,
    });

    expect(dlc).toBeInTheDocument();
  });

  it('renders car class', () => {
    const car = createCar({ class: 'Random car class' });
    renderCarCard(car);

    const carClass = screen.getByRole('heading', {
      name: /random car class/i,
    });

    expect(carClass).toBeInTheDocument();
  });

  it('renders car class pi', () => {
    const car = createCar({ pi: 100500 });
    renderCarCard(car);

    const pi = screen.getByRole('heading', {
      name: /100500/i,
    });

    expect(pi).toBeInTheDocument();
  });

  it('renders car stats component', () => {
    const car = createCar();
    renderCarCard(car);

    const statsComponent = screen.getByTestId('car-card-stats-div');

    expect(statsComponent).toBeInTheDocument();
  });

  it('renders if car is at wheelspin if yes', () => {
    const car = createCar({ wheelspin: true });
    renderCarCard(car);

    const wheelspin = screen.getByRole('heading', {
      name: /wheelspin available/i,
    });

    expect(wheelspin).toBeInTheDocument();
  });

  it('renders car mission', () => {
    const car = createCar({ mission: 'Randon Mission' });
    renderCarCard(car);

    const mission = screen.getByRole('heading', {
      name: /randon mission/i,
    });

    expect(mission).toBeInTheDocument();
  });

  it('renders garage-button component', () => {
    const car = createCar();

    vi.mock('@/components/Cards/CarCard/CarCardGarageButton.vue', () => ({
      default: {
        template:
          '<div data-testid="car-card-garage-button">Mocked card garage button component</div>',
      },
    }));

    renderCarCard(car);

    const garageButtonComponent = screen.getByTestId('car-card-garage-button');

    expect(garageButtonComponent).toBeInTheDocument();
  });
});
