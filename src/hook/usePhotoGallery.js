//!React
import { useState } from 'react';
//!Firebase
import { doc, updateDoc } from 'firebase/firestore';
import { storage,db } from '../firebase';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
//!Capacitor+Ionic
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { isPlatform } from '@ionic/core';
//!Hook

import useToast from '../hook/useToast';
//!Context


export const usePhotoGallery = () => {
  const [loading, setLoading] = useState(false);
  const presentToast = useToast();

  const [selectedImage, setSelectedImage] = useState(null);


  const uploadPhoto = async (identifier, storageFolder, collectionChain = [], fieldToUpdate) => {
    if (!selectedImage || !identifier) {
      // presentToast('No image selected or post without image', false);
      return;
    }
    const response = await fetch(selectedImage);
    const blob = await response.blob();
    setLoading(true);
    const fileRef = ref(storage, `${storageFolder}/${identifier}`);
    const metadata = {
      contentType: 'image/jpeg'
    };
    const snapshot = await uploadBytesResumable(fileRef, blob, metadata);
    const downloadURL = await getDownloadURL(snapshot.ref);

    if (collectionChain.length > 0 && fieldToUpdate) {
      const docRef = doc(db, ...collectionChain);
      await updateDoc(docRef, { [fieldToUpdate]: downloadURL });
      presentToast('The photo was uploaded and updated successfully', true);
    }
    setSelectedImage(null);  // Clear the selected image after uploading
    setLoading(false);
  };

  const selectImage = async (webPath) => {
    if (!webPath) {
      presentToast('Not found a file', false);
      return;
    }
    setSelectedImage(webPath);
  };



  const takePhoto = async () => {
    try {
      const file = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera
      });

      if (!file) {
        presentToast('Not found a file', false);
        return;
      }

      selectImage(file.webPath);
      presentToast('The image has been selected successfully and will be uploaded after saving changes', true);

    } catch (error) {
      console.error('Error taking photo:', error);
    }
  };


  const chooseFromGallery = async () => {

    if (isPlatform('hybrid')) {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri,
        source: CameraSource.Photos
      });

      console.log('Image from gallery:', image);
      if (image?.webPath) {
        selectImage(image.webPath);
        presentToast('The image has been selected successfully and will be uploaded after saving changes', true);
      } else {
        presentToast('Not found a file', false);
      }
    } else {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.onchange = (event) => {
        const file = event.target.files[0];
        if (file) {
          const webPath = URL.createObjectURL(file);
          selectImage(webPath);
        } else {
          presentToast('Not found a file', false);
        }
      };
      input.click();
    }
  };

  return {
    loading,
    selectedImage,
    uploadPhoto,
    takePhoto,
    chooseFromGallery,
  };
};

export default usePhotoGallery;
