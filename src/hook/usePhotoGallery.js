import { useState } from 'react';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { isPlatform } from '@ionic/core';
import { Filesystem, Directory } from '@capacitor/filesystem';
import useToast from '../hook/useToast';
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useContext } from 'react';
import AuthContext from '../providers/AuthContext';
export const usePhotoGallery = () => {
  const { userId } = useContext(AuthContext);
  const [isLoading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [photos, setPhotos] = useState([]);

  const presentToast = useToast();
  const takePhoto = async () => {
    const file1 = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Photos // Camera, Photos or Prompt!
    });

    if (!file1) {
      presentToast('Not found a file', false);
      return;
    }

    // Convert the blob URL to a blob
    const response = await fetch(file1.webPath);
    const blob = await response.blob();

    setLoading(true);

    const fileRef = ref(storage, 'avatars/' + userId);

    const metadata = {
      contentType: 'image/jpeg'
    };

    const snapshot = await uploadBytesResumable(fileRef, blob, metadata);
    const downloadURL = await getDownloadURL(snapshot.ref);

    const docRef = doc(db, 'users', userId);
    await updateDoc(docRef, { avatar: downloadURL });
    presentToast('The photo was uploaded and updated successfully', true);

    setLoading(false);
  };

  const chooseFromGallery = async () => {
    console.log('Choosing from gallery...');
    if (isPlatform('hybrid')) {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri,
        source: CameraSource.Photos
      });
      console.log('Image from gallery:', image);

      const response = await fetch(image.webPath);
      const blob = await response.blob();
      setFile(blob);
    } else {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.onchange = (event) => {
        const file = event.target.files[0];
        setFile(URL.createObjectURL(file));
      };
      input.click();
    }
  };

  return {
    file,
    setFile,
    takePhoto
  };
};

export default usePhotoGallery;
