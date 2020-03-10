import { Plugins, CameraResultType } from '@capacitor/core';
const { Camera } = Plugins;

async takePicture() {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Uri
  });

  imageElement.src = image.webPath;
}
