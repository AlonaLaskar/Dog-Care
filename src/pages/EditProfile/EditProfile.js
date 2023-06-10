import StyledEditProfile from './StyledEditProfile';
import Input from 'components/UI/Input';
import { useContext, useState, useEffect } from 'react';
import AuthContext from 'providers/AuthContext';
import { db } from '../../firebase';

import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonImg,
  IonButton,
  IonIcon,
  IonCardContent,
  IonActionSheet 
} from '@ionic/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FormContext from 'providers/FormContext';
import * as yup from 'yup';
import { cameraOutline, createOutline } from 'ionicons/icons';
import { useUser } from 'hook/users';
import { doc, updateDoc } from 'firebase/firestore';
import useToast from 'hook/useToast';
import { useUpdateAvatar } from 'hook/users';

const schema = yup.object().shape({
  fullName: yup.string(),

  aboutMe: yup.string(),
  location: yup.string(),
  avatar: yup.string()
});

const EditProfile = () => {
  const presentToast = useToast();

  const { userId } = useContext(AuthContext);
  const { user } = useUser(userId) || {};
  const [userProfile, setUserProfile] = useState(null);
  const uid = userId; // Assuming the user ID is stored in the userId variable



  const [isOpen, setIsOpen] = useState(false);


  const { setFile, updateAvatar, isLoading, fileUrl } = useUpdateAvatar(uid);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  useEffect(() => {
    if (user) {
      setUserProfile(user);
    }
  }, [user]);

  

  const handleRegister = async (data) => {
    // if (selectedAction === 'takePhoto') {
    //   // Logic for taking a photo
    // } else if (selectedAction === 'chooseFromGallery') {
    //   // Logic for choosing from the gallery
    // }

    const userRef = doc(db, 'users', userId);
    const updatedFields = {};

    for (const [key, value] of Object.entries(data)) {
      if (value && value !== userProfile[key]) {
        updatedFields[key] = value;
      }
    }

    if (Object.keys(updatedFields).length > 0) {
      const updatedUserData = {
        ...userProfile,
        ...updatedFields
      };

      await updateDoc(userRef, updatedUserData);
      presentToast('Your profile was edited successfully', true);

      console.log('Profile updated successfully.');
    } else {
      console.log('No changes to update.');
    }
  };

  return (
    <StyledEditProfile>
      <IonCard className="card">
        <FormContext.Provider value={{ errors, register }}>
          <form onSubmit={handleSubmit(handleRegister)}>
            <IonCardTitle>Edit Profile</IonCardTitle>
            <IonCardHeader>
              <IonButton
               onClick={() => setIsOpen(true)}
                fill="clear"
                className="editAvatar"
                
                style={{
                  width: '60px',
                  height: '60px',
                  bottom: '40px',
                  right: '40px',
                  background: '#FB8500',
                  borderRadius: '50px',
                  position: 'absolute',
                  top: '5%',
                  left: '79%'
                }}
              >
                <IonIcon
                 icon={cameraOutline}
                  // color="light"
                   size="large" />
              </IonButton>
                 <IonActionSheet
        isOpen={isOpen}
        header="Actions"
        buttons={[
          {
            text: 'Delete33333333',
            role: 'destructive',
            data: {
              action: 'delete',
            },
          },
          {
            text: 'Share',
            data: {
              action: 'share',
            },
          },
          {
            text: 'Cancel',
            role: 'cancel',
            data: {
              action: 'cancel',
            },
          },
        ]}
        onDidDismiss={() => setIsOpen(false)}
      ></IonActionSheet>
              <IonImg src={user?.avatar} />
            </IonCardHeader>
            <IonCardContent>
              <input type="file" onChange={(e) => setFile(e.target.files[0])} />
              <Input id="fullName" type="string" title={userProfile?.fullName} label="Full Name" />
              <Input id="location" type="string" title={userProfile?.location} label="Location" />
              <Input id="aboutMe" type="string" title={userProfile?.aboutMe} label="Information about you" />
         

            </IonCardContent>
            <IonButton type="submit" expand="block" fill="clear" style={{ background: '#FB8500' }}>
              <IonIcon slot="start" color="light" icon={createOutline} />
              <span>Save changes</span>
            </IonButton>
          </form>
        </FormContext.Provider>
      </IonCard>
    </StyledEditProfile>
  );
};

export default EditProfile;
