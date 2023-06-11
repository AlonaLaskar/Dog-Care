import { useState } from 'react';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { add } from 'date-fns';
import { isPlatform } from '@ionic/core';
import{Filesystem,Directory} from '@capacitor/filesystem';

export  const usePhotoGallery = () => {


    const [photos, setPhotos] = useState([]);

    const takePhoto = async () => {
        console.log("file useGallery");
        const cameraPhoto = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 100
        });
        console.log("file useGallery",cameraPhoto);

        const fileName = new Date().getTime() + '.jpeg';

        // const newPhotos = [{
        // filepath: fileName,
        // webviewPath: cameraPhoto.webPath
        // }, ...photos];
        // setPhotos(newPhotos)
    };
    const setPhoto=async(photo,fileName)=>{
        if (isPlatform('hybrid')){
            const file = await Filesystem.writeFile({
                path: photo.filepath,
                directory: Directory.Data,
                data: photo.webviewPath
            });
            const base64Data = file.data;
            return `data:image/jpeg;base64,${base64Data}`;
        }
        
    }

    const deletePhoto = async (photo) => {
        const newPhotos = photos.filter(p => p.filepath !== photo.filepath);
        setPhotos(newPhotos);
    };

    
    return {
        photos,
        takePhoto,
        deletePhoto
    };
    }