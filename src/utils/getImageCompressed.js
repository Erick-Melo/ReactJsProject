export const getImageCompressed = (key) => {
  const base64String = localStorage.getItem(key);
  if (!base64String) return null;

  return base64String;
};
