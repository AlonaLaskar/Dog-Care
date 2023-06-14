import StyledEditProfile from './StyledEditProfile';
import Input from 'components/UI/Input';
import { useContext, useState, useEffect } from 'react';
import AuthContext from 'providers/AuthContext';
import { db } from '../../firebase';
import {IonCard, IonCardTitle, IonCardHeader, IonButton, IonIcon, IonImg, IonCardContent, IonActionSheet} from '@ionic/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FormContext from 'providers/FormContext';
import * as yup from 'yup';
import { cameraOutline, createOutline } from 'ionicons/icons';
import { useUser } from 'hook/users';
import { doc, updateDoc } from 'firebase/firestore';
import useToast from 'hook/useToast';
import usePhotoGallery  from 'hook/usePhotoGallery';

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

  const { file, setFile, takePhoto, chooseFromGallery, updateAvatar } = usePhotoGallery();

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
    // if(file) { // If a file is present, try to update the avatar
    //   try {
    //     await updateAvatar();
    //     presentToast('The photo update successfully', true);
    //   } catch(err) {
    //     presentToast('Failed to update photo', false);
    //   }
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
                fill="clear"
                className="editAvatar"
                onClick={() => setIsOpen(true)}
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
                <IonIcon icon={cameraOutline} color="light" size="large"  />
              </IonButton>
              <IonActionSheet
                  isOpen={isOpen}
                  header="Actions"
                  buttons={[
                    {
                      text: 'Take a photo',
                      role: 'destructive',
                      handler: () => takePhoto(),
                    },
                    {
                      text: 'Choose from gallery',
                      handler: () => chooseFromGallery()
                    },
                    // rest of the buttons...
                  ]}
                  onDidDismiss={() => setIsOpen(false)}
                ></IonActionSheet>
              <IonImg src={user?.avatar} />
            </IonCardHeader>
            <IonCardContent>
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
