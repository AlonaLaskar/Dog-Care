
import react from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hook/authUser';
import { useUpdateAvatar } from '../../hook/users';
import { useState } from 'react';
import { IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonList, IonItem, IonLabel, IonInput } from '@ionic/react';


export default function EditProfile({isOpen, onClose}) {
    const { user, isLoading: authLoading } = useAuth();
    const {
      setFile,
      updateAvatar,
      isLoading: fileLoading,
      fileURL,
    } = useUpdateAvatar(user?.id);
  
    function handleChange(e) {
      setFile(e.target.files[0]);
    }
  
    if (authLoading) return 'Loading...';
    return (
        <IonModal isOpen={isOpen} onDidDismiss={onClose}>
        <IonHeader>
            <IonToolbar>
            <IonTitle>Change Avatar</IonTitle>
            <IonButtons slot='end'>
                <IonButton onClick={onClose}>Close</IonButton>
            </IonButtons>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonList>
            <IonItem>
                <IonLabel position='stacked'>Avatar</IonLabel>
                <IonInput
                type='file'
                accept='image/*'
                placeholder='Upload Avatar'
                onIonChange={handleChange}
                />
            </IonItem>
            </IonList>
            <IonButton
            expand='block'
            onClick={updateAvatar}
            isLoading={fileLoading}
            >
            {fileLoading ? 'Loading...' : 'save'}
            </IonButton>
        </IonContent>
        </IonModal>

    );
}

EditProfile.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    };
