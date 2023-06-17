//!React
import { useState,useContext } from 'react';
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
import AuthContext from '../providers/AuthContext';

export const usePhotoGallery = () => {
  const { userId } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const presentToast = useToast();

  const uploadPhoto = async (webPath) => {
    const response = await fetch(webPath);
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


  const selectImage = async (webPath) => {
    if (!webPath) {
      presentToast('Not found a file', false);
      return;
    }
    await uploadPhoto(webPath);
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
    } catch (error) {
      console.error('Error taking photo:', error);
    }
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
      if (image?.webPath) {
        selectImage(image.webPath);
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
          setFile(URL.createObjectURL(file));
          selectImage(URL.createObjectURL(file));
        } else {
          presentToast('Not found a file', false);
        }
      };
      input.click();
    }
  };







  
  const chooseFromGalleryToFeed = async () => {
    console.log('Choosing from gallery...');
    if (isPlatform('hybrid')) {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri,
        source: CameraSource.Photos
      });
  
      console.log('Image from gallery:', image);
      if (image?.webPath) {
        const response = await fetch(image.webPath);
        const blob = await response.blob();
        setLoading(true);
        const fileRef = ref(storage, 'posts/' + userId);
        const metadata = {
          contentType: 'image/jpeg'
        };
        const snapshot = await uploadBytesResumable(fileRef, blob, metadata);
        const downloadURL = await getDownloadURL(snapshot.ref);
        presentToast('The photo was uploaded successfully', true);
        setLoading(false);
      } else {
        presentToast('Not found a file', false);
      }
    } else {
      // Handle non-hybrid platforms (web)
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.onchange = (event) => {
        const file = event.target.files[0];
        if (file) {
          setFile(URL.createObjectURL(file));
          const fileRef = ref(storage, 'posts/' + userId);
          const metadata = {
            contentType: 'image/jpeg'
          };
          setLoading(true);
          uploadBytesResumable(fileRef, file, metadata)
            .then((snapshot) => {
              return getDownloadURL(snapshot.ref);
            })
            .then((downloadURL) => {
              presentToast('The photo was uploaded successfully', true);
              setLoading(false);
            })
            .catch((error) => {
              console.error('Error uploading photo:', error);
              presentToast('Failed to upload the photo', false);
              setLoading(false);
            });
        } else {
          presentToast('Not found a file', false);
        }
      };
      input.click();
    }
  };
  
   
  
  return {
    file,
    setFile,
    takePhoto,
    chooseFromGallery,
    chooseFromGalleryToFeed
  };
};

export default usePhotoGallery;
