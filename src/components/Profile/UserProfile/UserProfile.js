import { locationOutline, createOutline } from 'ionicons/icons';
import AuthContext from 'providers/AuthContext';
import { useContext, useState } from 'react';
import { useUser } from 'hook/users';
import { useHistory } from 'react-router-dom';
import StyledUserProfile from './StyledUserProfile';
import { auth } from '../../../firebase';
import { getAuth, deleteUser } from 'firebase/auth';
import { query, collection, getDocs, deleteDoc, where } from 'firebase/firestore';
import { db } from '../../../firebase';
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonImg,
  IonLabel,
  IonText,
  IonButton,
  IonIcon,
  IonAlert
} from '@ionic/react';

const UserProfile = () => {
  const history = useHistory();
  const { userId } = useContext(AuthContext);
  const { user } = useUser(userId) || {};
  console.log('userId', userId);

  const [isUserMode, setIsUserMode] = useState(true);
  const handleToggleChange = (event) => setIsUserMode(event.detail.value === 'user');

  const [showAlert, setShowAlert] = useState(false);

  const handleDeleteButtonClick = () => {
    setShowAlert(true);
  };
  const handleEditButtonClick = () => {
    // history.push(`/my/editProfile/${userId}`);
  };

  const handleRemoveUser  = async () => {
    setShowAlert(false);

    var userAuth = user.currentUser;
    try {
      const deleteUserCollections = async (collectionName, userIdentifier) => {
        console.log(`Trying to delete documents in ${collectionName}`);
        const q = query(collection(db, collectionName), where(userIdentifier, '==', userId));
        const querySnapshot = await getDocs(q);
        console.log(`Found ${querySnapshot.size} documents to delete in ${collectionName}`);
        querySnapshot.forEach((doc) => {
          console.log(`Deleting document ${doc.id} in ${collectionName}`);
          deleteDoc(doc.ref);
        });
      };
      
      // Now you can use this function to delete the documents in each collection
      await deleteUserCollections('users', 'id');
      await deleteUserCollections('posts', 'uid');
      await deleteUserCollections('comments', 'uid');
      await deleteUserCollections('availability', 'userId');
      await userAuth.delete();
      console.log('User deleted.');
      history.push('/login');
    } catch (error) {
      console.log('Error while deleting user or documents:', error);
    }
  };

  const dob = new Date(user?.birthDate);
  const ageInMs = Date.now() - dob.getTime();
  const ageInYears = new Date(ageInMs).getFullYear() - 1970;
  console.log('ageInYears', ageInYears);

  return (
    <StyledUserProfile>
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        cssClass='my-custom-class'
        header={'Confirm'}
        message={'Are you sure you want to delete your account? This action cannot be undone.'}
        buttons={[
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          },
          {
            text: 'Yes, Delete',
            handler: handleRemoveUser
          }
        ]}
      />
      <IonCard className="card">
        <IonCardHeader>
          <IonCardTitle>My Profile</IonCardTitle>
          <IonCardSubtitle>
            <IonButton onClick={handleEditButtonClick} fill="clear">
              <IonIcon icon={createOutline} color="light" />
            </IonButton>
          </IonCardSubtitle>
          <IonImg src={user?.avatar} />

          <IonLabel className="name">
            {user?.fullName}, {ageInYears}
          </IonLabel>
        </IonCardHeader>
        <IonLabel className="location">
          <IonIcon icon={locationOutline} />
          {user?.location}, Israel
        </IonLabel>
        <IonText>
          <IonLabel className="bio">About Me:</IonLabel>
          {user?.aboutMe}
        </IonText>
        <IonButton className="removeUser" color="danger" onClick={handleDeleteButtonClick}>
          delete account
        </IonButton>
      </IonCard>
    </StyledUserProfile>
  );
};

export default UserProfile;
