import React from 'react';
import { camera } from 'ionicons/icons';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon } from '@ionic/react';
import {usePhotoGallery} from '../../src/hook/usePhotoGallery';

const Photo = () => {
    const { photos, takePhoto,deletePhoto } = usePhotoGallery();


  return (
    <IonPage
      style={{
        marginTop: '60px'
      }}
    >
      <IonHeader>
        <IonToolbar>
          <IonTitle>My gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonFab vertical="button" horizontal="end" slot="fixed">
          <IonFabButton onClick={takePhoto}>
            <IonIcon icon={camera} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};
export default Photo;
