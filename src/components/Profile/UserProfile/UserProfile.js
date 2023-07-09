import { locationOutline, createOutline } from 'ionicons/icons';
import AuthContext from 'providers/AuthContext';
import { useContext, useState } from 'react';
import { useUser } from 'hook/users';
import { useHistory } from 'react-router-dom';
import StyledUserProfile from './StyledUserProfile';
import { query, collection, getDocs, deleteDoc, where } from 'firebase/firestore';
import { db } from '../../../firebase';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonImg,
  IonLabel,
  IonText,
  IonButton,
  IonIcon,
  IonAlert,
  IonCardContent
} from '@ionic/react';

const UserProfile = () => {
  const history = useHistory();
  const { userId } = useContext(AuthContext);
  const { user } = useUser(userId) || {};

  const [showAlert, setShowAlert] = useState(false);

  const handleDeleteButtonClick = () => {
    setShowAlert(true);
  };
  const handleEditButtonClick = () => {
    history.push(`/my/editProfile/${userId}`);
  };

  const handleRemoveUser = async () => {
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
      history.push('/login');
    } catch (error) {
      console.log('Error while deleting user or documents:', error);
    }
  };

  const dob = new Date(user?.birthDate);
  const ageInMs = Date.now() - dob.getTime();
  const ageInYears = new Date(ageInMs).getFullYear() - 1970;

  return (
    <StyledUserProfile>
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        cssClass="my-custom-class"
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
          <IonButton onClick={handleEditButtonClick} fill="clear">
            <IonIcon icon={createOutline} color="light" />
          </IonButton>
        </IonCardHeader>
        <IonCardContent>
        <IonImg src={user?.avatar} />

        <IonLabel className="name">
          {user?.fullName}, {ageInYears}
        </IonLabel>
        <IonLabel className="location">
          <IonIcon icon={locationOutline} />
          {user?.location}
        </IonLabel>
        <IonText>
          <IonLabel className="bio">About Me:</IonLabel>
          <div>{user?.aboutMe}</div>
        </IonText>
        <IonText>
          <IonLabel className="bio">Phone number:</IonLabel>
          <div>{user?.tel}</div>
        </IonText>
        <IonText>
          <IonLabel className="bio">Email:</IonLabel>
          <div>{user?.email}</div>
        </IonText>
        <div className="ion-text-right">
        <IonButton className="removeUser" color="danger" onClick={handleDeleteButtonClick}>
          delete account
        </IonButton>
        </div>
        </IonCardContent>
      </IonCard>
    </StyledUserProfile>
  );
};

export default UserProfile;