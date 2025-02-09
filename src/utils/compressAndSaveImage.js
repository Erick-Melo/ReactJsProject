export const compressAndSaveImage = (file, key, quality = 0.7) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        const MAX_WIDTH = 800;
        const scaleSize = MAX_WIDTH / img.width;
        canvas.width = MAX_WIDTH;
        canvas.height = img.height * scaleSize;

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const compressedBase64 = canvas.toDataURL("image/jpeg", quality);

        try {
          localStorage.setItem(key, compressedBase64);
          resolve(compressedBase64);
        } catch (error) {
          reject("Erro ao salvar imagem: " + error);
        }
      };
    };
    reader.onerror = (error) => reject(error);
  });
};
