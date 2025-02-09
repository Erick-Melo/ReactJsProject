export const loadImageBase64 = (key, imgElement) => {
  const imageData = getImageFromLocalStorage(key);
  if (imageData) {
    imgElement.src = imageData;
  }
};