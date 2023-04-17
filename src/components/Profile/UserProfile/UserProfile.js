import {
  IonTitle,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  IonToggle,
  IonCheckbox,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardContent
} from '@ionic/react';
import {
  locationOutline,
  createOutline
} from 'ionicons/icons';
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
  const handleToggleChange = () => setIsUserMode(!isUserMode);

  const handleEditButtonClick = () => {
    history.push(`/my/editProfile/${userId}`);
  };
  //! Calculate age
  const dob = new Date(user?.birthDate);
  const ageInMs = Date.now() - dob.getTime();
  const ageInYears = new Date(ageInMs).getFullYear() - 1970;
  console.log(user?.aboutMe);

  return (
    <StyledUserProfile>
      <IonCard>
        <IonCardHeader>
          <IonTitle>My Profile</IonTitle>
          <IonButton onClick={handleEditButtonClick}>
            <IonIcon slot="icon-only" icon={createOutline} />
          </IonButton>
        </IonCardHeader>
        <IonCardContent>
          <img src={user?.avatar} />
          <div className='name'>
            {user?.fullName},{ageInYears}
          </div>
          <div className='location'>
            <IonIcon icon={locationOutline} />
            {user?.address},Israel
          </div>

     
     <div className='aboutMe'>
            <p>
              <span>about Me:</span><br/>
              {user?.aboutMe}
            </p>
          </div>


        <div className='mood'>
          {!isUserMode && (
            <IonList >
              <IonItem>
              <IonToggle
              slot='start'
               enableOnOffLabels={true}
               >
                Walking with the dog
                </IonToggle>
              
              </IonItem>
              <IonItem>
                <IonCheckbox slot="start" />
                <IonLabel>Keeping the dog</IonLabel>
              </IonItem>
            </IonList>
          )}
          <IonToggle checked={!isUserMode} onIonChange={handleToggleChange} />
        </div>
        </IonCardContent>
      </IonCard>
    </StyledUserProfile>
  );
};

export default UserProfile;
