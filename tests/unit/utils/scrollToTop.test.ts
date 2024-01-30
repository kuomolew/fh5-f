import scrollToTop from '@/utils/scrollToTop';

declare global {
  interface Window {
    originalScrollTo: typeof window.scrollTo;
  }
}

describe('scrollToTop', () => {
  const originalScrollTo = window.scrollTo;
  const scrollToMock = vi.fn();

  beforeEach(() => {
    window.scrollTo = scrollToMock;
  });

  afterEach(() => {
    window.scrollTo = originalScrollTo;
  });

  it('scrolls to top of the screen', () => {
    scrollToTop();

    expect(scrollToMock).toHaveBeenCalledWith({
      behavior: 'smooth',
      left: 0,
      top: 0,
    });
  });
});
