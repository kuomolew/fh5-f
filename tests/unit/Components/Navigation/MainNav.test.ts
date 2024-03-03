import { render, screen } from '@testing-library/vue';
import { createTestingPinia } from '@pinia/testing';
import { RouterLinkStub } from '@vue/test-utils';
import userEvent from '@testing-library/user-event';

import type { Mock } from 'vitest';
import { useRoute } from 'vue-router';
vi.mock('vue-router');
const useRouteMock = useRoute as Mock;

import MainNav from '@/components/Navigation/MainNav.vue';
import { useUserStore } from '@/stores/user';

describe('MainNav', () => {
  const renderMainNav = () => {
    const push = vi.fn();
    useRouteMock.mockReturnValue({ push });
    const pinia = createTestingPinia();

    render(MainNav, {
      global: {
        plugins: [pinia],
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });
  };

  it('renders title text', () => {
    renderMainNav();

    const title = screen.getByText(/forza auction helper/i);

    expect(title).toBeInTheDocument();
  });

  it('displays navigation items', () => {
    renderMainNav();

    const navigationMenuItems = screen.getAllByRole('listitem');
    const navigationMenuTexts = navigationMenuItems.map((item) => item.textContent);

    expect(navigationMenuTexts).toEqual(['All Cars', 'My Garage']);
  });

  describe('when the user logs in', () => {
    it('displays user profile picture', async () => {
      renderMainNav();
      const userStore = useUserStore();

      const unloggedProfileImage = screen.queryByRole('img', {
        name: /user profile image/i,
      });

      const unloggedLoginButton = screen.getByRole('button', {
        name: /sign in/i,
      });

      expect(unloggedProfileImage).not.toBeInTheDocument();
      expect(unloggedLoginButton).toBeInTheDocument();

      userStore.isLoggedIn = true;
      await userEvent.click(unloggedLoginButton);

      const loggedProfileImage = screen.queryByRole('img', {
        name: /user profile image/i,
      });

      const loggedLoginButton = screen.queryByRole('button', {
        name: /sign in/i,
      });

      expect(loggedProfileImage).toBeInTheDocument();
      expect(loggedLoginButton).not.toBeInTheDocument();
    });
  });
});
