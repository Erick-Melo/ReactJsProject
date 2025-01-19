export const randomDecimalGenerator = () => {
  const wholePart = (Math.floor(Math.random() * 200) + 1) * 10;
  const decimalPart = Math.floor(Math.random() * 10) * 10;

  const result = (wholePart + decimalPart / 100).toFixed(2);
  return result;
};
