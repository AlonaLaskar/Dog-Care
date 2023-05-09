import { IonTitle, IonIcon, IonToggle, IonButton, IonCard, IonCardHeader, IonCardContent, IonToolbar } from '@ionic/react';
import { locationOutline, createOutline } from 'ionicons/icons';
import AuthContext from 'providers/AuthContext';
import { useContext, useState } from 'react';
import { useUser } from 'hook/users';
import { useHistory } from 'react-router-dom';
import StyledUserProfile from './StyledUserProfile';
import ServiceMode from 'components/Schedule/ServiceMode';
import UnUserMode from 'components/Profile/UnUserMode';

const UserProfile = () => {
  const history = useHistory();
  //! Get user id from AuthContext
  const { userId } = useContext(AuthContext) || {};
  const { user } = useUser(userId) || {};

  const [isUserMode, setIsUserMode] = useState(true);
  const handleToggleChange = () => setIsUserMode(!isUserMode);

  const handleEditButtonClick = () => {
    history.push(`/my/editProfile/${userId}`);
  };
  //! Calculate age
  const dob = new Date(user?.birthDate);
  const ageInMs = Date.now() - dob.getTime();
  const ageInYears = new Date(ageInMs).getFullYear() - 1970;

  const title = isUserMode ? 'My Profile' : 'Service Provider Mode';

  return (
    <StyledUserProfile>
      <div className="header">
        <div className="title">
          <IonTitle>My Profile</IonTitle>
        </div>

        <img src={user?.avatar} />
        <div className="name">
          {user?.fullName},{ageInYears}
        </div>
        <div className="location">
          <IonIcon icon={locationOutline} />
          {user?.city},Israel
        </div>

        <div className="bio">
          <p>
            <span>about Me:</span>
            <br />
            {user?.aboutMe}
          </p>
        </div>
      </div>

      <div className="mode">
        {!isUserMode && <ServiceMode  />}

        {isUserMode && <UnUserMode/> }
      
        <IonToggle checked={!isUserMode} onIonChange={handleToggleChange}>
          <IonIcon slot="start" icon={createOutline} />
          <IonTitle>{title}</IonTitle>
        </IonToggle>
      </div>
    </StyledUserProfile>
  );
};

export default UserProfile;
