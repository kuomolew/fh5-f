import { render, screen } from '@testing-library/vue';

import CarCardStats from '@/components/Cards/CarCard/CarCardStats.vue';

const renderCarCardStats = (props = {}) => {
  render(CarCardStats, {
    props: {
      speed: 250,
      handling: 250,
      acceleration: 250,
      launch: 250,
      braking: 250,
      offroad: 250,
      stat: 250,
      ...props,
    },
  });
};

describe('CarCardStats', () => {
  it('renders title', () => {
    renderCarCardStats();

    const title = screen.getByRole('heading', {
      name: /stats:/i,
    });

    expect(title).toBeInTheDocument();
  });

  it('renders car speed', () => {
    const props = { speed: 150 };
    renderCarCardStats(props);

    const speed = screen.getByRole('heading', {
      name: /15.0/i,
    });

    expect(speed).toBeInTheDocument();
  });

  it('renders car handling', () => {
    const props = { handling: 150 };
    renderCarCardStats(props);

    const handling = screen.getByRole('heading', {
      name: /15.0/i,
    });

    expect(handling).toBeInTheDocument();
  });

  it('renders car acceleration', () => {
    const props = { acceleration: 150 };
    renderCarCardStats(props);

    const acceleration = screen.getByRole('heading', {
      name: /15.0/i,
    });

    expect(acceleration).toBeInTheDocument();
  });

  it('renders car launch', () => {
    const props = { launch: 150 };
    renderCarCardStats(props);

    const launch = screen.getByRole('heading', {
      name: /15.0/i,
    });

    expect(launch).toBeInTheDocument();
  });

  it('renders car braking', () => {
    const props = { braking: 150 };
    renderCarCardStats(props);

    const braking = screen.getByRole('heading', {
      name: /15.0/i,
    });

    expect(braking).toBeInTheDocument();
  });

  it('renders car offroad', () => {
    const props = { offroad: 150 };
    renderCarCardStats(props);

    const offroad = screen.getByRole('heading', {
      name: /15.0/i,
    });

    expect(offroad).toBeInTheDocument();
  });

  it('renders car total stat', () => {
    const props = { stat: 150 };
    renderCarCardStats(props);

    const stat = screen.getByRole('heading', {
      name: /15.0/i,
    });

    expect(stat).toBeInTheDocument();
  });
});
