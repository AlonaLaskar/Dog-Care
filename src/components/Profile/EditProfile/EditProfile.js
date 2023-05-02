//!Context
import { useContext } from 'react';
import AuthContext from 'providers/AuthContext';
//!Ionic Components
import { IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonList, IonItem, IonLabel, IonInput } from '@ionic/react';

import PropTypes from 'prop-types';

import { useUpdateAvatar } from 'hook/users';


export default function EditProfile({isOpen, onClose}) {
    const { userId, loading } = useContext(AuthContext) || {};    const {
      setFile,
      updateAvatar,
      isLoading: fileLoading,
      
    } = useUpdateAvatar(userId);
  
    function handleChange(e) {
      setFile(e.target.files[0]);
    }
  
    if (loading) return 'Loading...';
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
