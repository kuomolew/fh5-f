import { render, screen } from '@testing-library/vue';

import GarageViewText from '@/components/Texts/GarageViewText.vue';

describe('GarageViewText', () => {
  it('renders lo gin text', () => {
    render(GarageViewText);
    const text = screen.getByText('Log in to see your garage');
    expect(text).toBeInTheDocument();
  });
});
