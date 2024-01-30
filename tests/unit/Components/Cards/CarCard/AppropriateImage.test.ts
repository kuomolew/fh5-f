import { render, screen } from '@testing-library/vue';

import AppropriateImage from '@/components/Cards/CarCard/AppropriateImage.vue';

const renderAppropriateImage = (props = {}) => {
  render(AppropriateImage, {
    props: {
      ...props,
    },
  });
};

describe('AppropriateImage', () => {
  it('renders provided image', () => {
    const imageProps = { image: 'my-image', path: 'path/to', extension: 'jpg' };
    renderAppropriateImage(imageProps);
    const image = screen.getByRole('img');

    expect(image).toHaveAttribute('src', './path/to/my-image.jpg');
  });

  describe('if there is no image listed', () => {
    it('renders default image', () => {
      const imageProps = { image: '', path: 'path/to', extension: 'jpg' };
      renderAppropriateImage(imageProps);
      const image = screen.getByRole('img');

      expect(image).toHaveAttribute('src', './path/to/default.jpg');
    });
  });

  describe('if there is no extension provided', () => {
    it('renders .png extension', () => {
      const imageProps = { image: 'my-image', path: 'path/to' };
      renderAppropriateImage(imageProps);
      const image = screen.getByRole('img');

      expect(image).toHaveAttribute('src', './path/to/my-image.png');
    });
  });
});
