//!React+Ionic
import { useContext, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  IonCard,
  IonCardTitle,
  IonCardHeader,
  IonButton,
  IonIcon,
  IonImg,
  IonCardContent,
  IonActionSheet,
  IonTextarea,
  IonLabel
} from '@ionic/react';
import { cameraOutline, createOutline } from 'ionicons/icons';
//!Firebase
import { db } from '../../firebase';
import { doc, updateDoc } from 'firebase/firestore';
//!context
import Input from 'components/UI/Input';
import AuthContext from 'providers/AuthContext';
import FormContext from 'providers/FormContext';
import * as yup from 'yup';
//!Hook
import { useUser } from 'hook/users';
import useToast from 'hook/useToast';
import { yupResolver } from '@hookform/resolvers/yup';
import usePhotos from 'hook/usePhotoGallery';
//!Style
import StyledEditProfile from './StyledEditProfile';

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
  const [isOpen, setIsOpen] = useState(false);

  const { takePhoto, chooseFromGallery, uploadPhoto } = usePhotos();

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
    //update user profile
    const userRef = doc(db, 'users', userId);
    const updatedFields = {};
    await uploadPhoto(userId, 'users', ['users', userId], 'avatar');

    for (const [key, value] of Object.entries(data)) {
      if (value && value !== userProfile[key]) {
        updatedFields[key] = value;
      }
    }
    //update only if there are changes
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
            <IonCardHeader>
              <IonCardTitle>Edit Profile</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <div className="user-pic">
                <IonButton fill="clear" className="editAvatar" onClick={() => setIsOpen(true)}>
                  <IonIcon icon={cameraOutline} color="light" />
                </IonButton>
                <IonImg src={user?.avatar} />
              </div>
              <IonActionSheet
                isOpen={isOpen}
                header="Actions"
                buttons={[
                  {
                    text: 'Take a photo',
                    role: 'destructive',
                    handler: () => takePhoto()
                  },
                  {
                    text: 'Choose from gallery',
                    handler: () => chooseFromGallery()
                  }
                  // rest of the buttons...
                ]}
                onDidDismiss={() => setIsOpen(false)}
              ></IonActionSheet>
              <Input id="fullName" type="string" title={userProfile?.fullName} label="Full Name" />
              <Input id="location" type="string" title={userProfile?.location} label="Location" />
              <IonLabel>Information about you</IonLabel>
              <IonTextarea
                counter={true}
                maxlength={100}
                rows={3}
                id="aboutMe"
                placeholder="Information about you"
                value={userProfile?.aboutMe}
                {...register('aboutMe')}
              ></IonTextarea>
              {/* <Input id="aboutMe" type="string" title={userProfile?.aboutMe} label="Information about you" /> */}
              <IonButton type="submit" expand="block" fill="clear" style={{ background: '#FB8500' }}>
                <IonIcon slot="start" color="light" icon={createOutline} />
                <span>Save changes</span>
              </IonButton>
            </IonCardContent>
          </form>
        </FormContext.Provider>
      </IonCard>
    </StyledEditProfile>
  );
};

export default EditProfile;
