export const randomNumbersGenerator = (min, max, length) => {
  return Array.from({ length: length }, () => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  });
};
