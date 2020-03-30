import { Plugins, CameraResultType } from '@capacitor/core';
const { Camera, LocalNotifications } = Plugins;

async takePicture() {
  const image = await Camera.getPhoto({
    quality: 90,
    resultType: CameraResultType.Uri
  });

  imageElement.src = image.webPath;

  LocalNotifications.schedule({
    notifications: [
      {
        id: 1,
        title: "New Photo Captured",
        body: "Photo details",
        schedule: { at: new Date(Date.now() + 1000 * 5) }
      }
    ]
  });
}
