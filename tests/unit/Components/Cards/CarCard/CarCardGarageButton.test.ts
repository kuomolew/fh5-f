import { createPinia, setActivePinia } from 'pinia';

import { render, screen } from '@testing-library/vue';
import { userEvent } from '@testing-library/user-event';

import { useUserStore } from '@/stores/user';

import CarCardGarageButton from '@/components/Cards/CarCard/CarCardGarageButton.vue';

describe('CarCardGarageButton', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  const renderCarCardGarageButton = (carId = 'Peugeot') => {
    const component = render(CarCardGarageButton, {
      props: {
        carId: carId,
      },
    });

    return component;
  };

  describe('when the user is logged out', () => {
    it('shows "Sign in to use" text', async () => {
      renderCarCardGarageButton();
      const button = await screen.findByRole('button', {
        name: /sign in to use/i,
      });

      expect(button).toBeInTheDocument();
    });

    it('provides appropriate class', async () => {
      renderCarCardGarageButton();

      const button = await screen.findByRole('button', {
        name: /sign in to use/i,
      });

      expect(button).toHaveClass('unlogged');
    });

    describe('when the user logs in', () => {
      it('updates button text', async () => {
        const userStore = useUserStore();
        const carCardGarageButton = renderCarCardGarageButton();

        let button = await screen.findByRole('button', {
          name: /sign in to use/i,
        });

        expect(button).toBeInTheDocument();

        userStore.LOGIN_USER();
        carCardGarageButton.rerender;

        button = await screen.findByRole('button', {
          name: /not owned/i,
        });

        expect(button).toBeInTheDocument();
      });
    });
  });

  describe('when the user is logged in', () => {
    beforeEach(() => {
      const userStore = useUserStore();
      userStore.LOGIN_USER();
    });

    describe("when user hasn't the car at garage", () => {
      it('shows "Not Owned" text', async () => {
        renderCarCardGarageButton();

        const button = await screen.findByRole('button', {
          name: /not owned/i,
        });

        expect(button).toBeInTheDocument();
      });

      it('provides appropriate class', async () => {
        renderCarCardGarageButton();

        const button = await screen.findByRole('button', {
          name: /not owned/i,
        });

        expect(button).toHaveClass('not-owned');
      });

      it('shows "Add" text on hover', async () => {
        renderCarCardGarageButton();

        const button = await screen.findByRole('button');
        await userEvent.hover(button);

        expect(button).toHaveTextContent('Add');
      });

      it('adds car to the users garage on click', async () => {
        const userStore = useUserStore();
        userStore.ADD_TO_GARAGE = vi.fn();
        renderCarCardGarageButton();

        const button = await screen.findByRole('button');
        await userEvent.click(button);

        expect(userStore.ADD_TO_GARAGE).toHaveBeenCalledWith('Peugeot');
      });
    });

    describe('when user has the car at garage', () => {
      beforeEach(() => {
        const userStore = useUserStore();
        userStore.ADD_TO_GARAGE('Peugeot');
      });

      it('shows "Owned" text', async () => {
        renderCarCardGarageButton();

        const button = await screen.findByRole('button', {
          name: /owned/i,
        });

        expect(button).toBeInTheDocument();
      });

      it('provides appropriate class', async () => {
        renderCarCardGarageButton();

        const button = await screen.findByRole('button', {
          name: /owned/i,
        });

        expect(button).toHaveClass('owned');
      });

      it('shows "Remove" text on hover', async () => {
        renderCarCardGarageButton();

        const button = await screen.findByRole('button');
        await userEvent.hover(button);

        expect(button).toHaveTextContent('Remove');
      });

      it('removes car from the users garage on click', async () => {
        const userStore = useUserStore();
        userStore.REMOVE_FROM_GARAGE = vi.fn();
        renderCarCardGarageButton();

        const button = await screen.findByRole('button');
        await userEvent.click(button);

        expect(userStore.REMOVE_FROM_GARAGE).toHaveBeenCalledWith('Peugeot');
      });
    });

    describe('when the user logs out', () => {
      it('updates button text', async () => {
        const userStore = useUserStore();
        const carCardGarageButton = renderCarCardGarageButton();

        let button = await screen.findByRole('button', {
          name: /not owned/i,
        });

        expect(button).toBeInTheDocument();

        userStore.isLoggedIn = false;
        carCardGarageButton.rerender;

        button = await screen.findByRole('button', {
          name: /sign in to use/i,
        });

        expect(button).toBeInTheDocument();
      });
    });
  });
});
