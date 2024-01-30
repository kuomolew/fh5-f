import kebabize from '@/utils/kebabize';

describe('kebabize', () => {
  it('transforms regular sentense to kebab case', () => {
    const text = 'Regular every DAY normal text';
    const kebabized = kebabize(text);

    expect(kebabized).toEqual('regular-every-day-normal-text');
  });
});
