const kebabize = (string: string) => {
  return string
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .replace(/, /g, '-')
    .toLowerCase();
};

export default kebabize;
