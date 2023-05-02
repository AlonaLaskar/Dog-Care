import { useState } from 'react';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

export const usePhotoGallery= ()=>{
    const [photos, setPhotos] = useState([]);

    const takePhoto = async () => {
        const photo= await Camera.getPhoto({
            resultType: CameraResultType.Uri,
            source: CameraSource.Camera,
            quality: 100,
        });
        console.log("photo,", photo);
        const fileName = new Date().getTime() + '.jpeg';
    }
    const savePhoto = async () => {

    }


    const deletePhoto= async (photoToDelete) => {
        const newPhotos = photos.filter((photo) => photo !== photoToDelete);
        setPhotos(newPhotos);
    };
    return{
        photos,
        takePhoto,
        deletePhoto,
    }
    
}

