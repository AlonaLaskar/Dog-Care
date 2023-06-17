import {
  IonCardTitle,
  IonIcon,
  IonButton,
  IonCard,
  IonCardSubtitle,
  IonCardHeader,
  IonImg,
  IonLabel,
  IonText,
  IonSegment,
  IonSegmentButton,
} from '@ionic/react';
import { locationOutline, createOutline } from 'ionicons/icons';
import AuthContext from 'providers/AuthContext';
import { useContext, useState } from 'react';
import { useUser } from 'hook/users';
import { useHistory } from 'react-router-dom';
import StyledUserProfile from './StyledUserProfile';

const UserProfile = () => {
  const history = useHistory();
  const { userId } = useContext(AuthContext) || {};
  const { user } = useUser(userId) || {};

  const [isUserMode, setIsUserMode] = useState(true);
  const handleToggleChange = (event) => setIsUserMode(event.detail.value === 'user');


  const handleEditButtonClick = () => {
    history.push(`/my/editProfile/${userId}`);
  };

  const dob = new Date(user?.birthDate);
  const ageInMs = Date.now() - dob.getTime();
  const ageInYears = new Date(ageInMs).getFullYear() - 1970;
  console.log('ageInYears', ageInYears);

  return (
    <StyledUserProfile>
      <IonCard className='card'>
        <IonCardHeader>
          <IonCardTitle>My Profile</IonCardTitle>
          <IonCardSubtitle>
            <IonButton onClick={handleEditButtonClick} fill='clear'>
              <IonIcon icon={createOutline} color='light' />
            </IonButton>
          </IonCardSubtitle>
          <IonImg src={user?.avatar} />

          <IonLabel className='name'>
            {user?.fullName}, {ageInYears}
          </IonLabel>
        </IonCardHeader>
        <IonLabel className='location'>
          <IonIcon icon={locationOutline} />
          {user?.location}, Israel
        </IonLabel>
        <IonText>
          <IonLabel className='bio'>About Me:</IonLabel>
          {user?.aboutMe}
        </IonText>
        
  
      </IonCard>
    </StyledUserProfile>
  );
};

export default UserProfile;
