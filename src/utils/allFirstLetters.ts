const allFirstLetters = (list: string[]) => {
  const lettersSet = new Set<string>();

  if (list.length > 0) {
    list.forEach((value) => {
      const capitalFirstLetter = value[0].toUpperCase();
      lettersSet.add(capitalFirstLetter);
    });
  }

  const lettersArray = Array.from(lettersSet);

  lettersArray.sort((a, b) => a.localeCompare(b));

  lettersArray.unshift('All');

  return lettersArray;
};

export default allFirstLetters;
