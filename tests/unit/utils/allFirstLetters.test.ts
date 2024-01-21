import allFirstLetters from '@/utils/allFirstLetters';

describe('allFirstLetters', () => {
  it('returns sorted array of all first letters in capitals from the list of strings and adds "All" word to the start', () => {
    const array = ['One', 'Two', 'Three', 'four'];
    const result = allFirstLetters(array);

    expect(result).toEqual(['All', 'F', 'O', 'T']);
  });

  describe('in case of empty array', () => {
    it('returns array with "All" word', () => {
      const array = <string[]>[];
      const result = allFirstLetters(array);

      expect(result).toEqual(['All']);
    });
  });
});
