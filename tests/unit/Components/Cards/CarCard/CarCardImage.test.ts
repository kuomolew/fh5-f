import { render, screen } from '@testing-library/vue';

import CarCardImage from '@/components/Cards/CarCard/CarCardImage.vue';

const renderCarCardImage = (props = {}) => {
  render(CarCardImage, {
    props: {
      ...props,
    },
  });
};

describe('CarCardImage', () => {
  it('renders provided image', () => {
    const imageProps = { image: 'my-image', path: 'path/to', extension: 'jpg' };
    renderCarCardImage(imageProps);
    const image = screen.getByRole('img');

    expect(image).toHaveAttribute('src', './path/to/my-image.jpg');
  });

  describe('if there is no image listed', () => {
    it('renders default image', () => {
      const imageProps = { image: '', path: 'path/to', extension: 'jpg' };
      renderCarCardImage(imageProps);
      const image = screen.getByRole('img');

      expect(image).toHaveAttribute('src', './path/to/default.jpg');
    });
  });

  describe('if there is no extension provided', () => {
    it('renders .png extension', () => {
      const imageProps = { image: 'my-image', path: 'path/to' };
      renderCarCardImage(imageProps);
      const image = screen.getByRole('img');

      expect(image).toHaveAttribute('src', './path/to/my-image.png');
    });
  });
});
