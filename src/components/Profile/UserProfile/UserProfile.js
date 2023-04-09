import { IonImg , IonTitle, IonList, IonItem, IonIcon, IonLabel, IonToggle, IonCheckbox, IonButton, IonHeader } from '@ionic/react';
import { personCircleOutline, mailOutline, callOutline, mapOutline, calendarOutline, warningOutline, basketOutline, createOutline } from 'ionicons/icons';
import AuthContext from 'providers/AuthContext';
import { useContext, useState } from 'react';
import { useUser } from 'hook/users';
import { useHistory } from 'react-router-dom';

const UserProfile = () => {
  const history = useHistory();
  const { userId, loading } = useContext(AuthContext) || {};
  const { user } = useUser(userId) || {};

  const [isUserMode, setIsUserMode] = useState(true);
  const [serviceDescription, setServiceDescription] = useState(user?.serviceDescription || '');

  const handleToggleChange = () => setIsUserMode(!isUserMode);

  const userData = [
    { label: 'Username', value: user?.username, icon: personCircleOutline },
    { label: 'Email', value: user?.email, icon: mailOutline },
    { label: 'Phone', value: user?.phone, icon: callOutline },
    { label: 'Address', value: user?.address, icon: mapOutline },
    { label: 'Birthday', value: user?.birthDate, icon: calendarOutline },
    { label: isUserMode ? 'User mod' : 'Service mod', value: isUserMode ? user?.serviceDescription : serviceDescription, icon: warningOutline }
  ];

  const handleEditButtonClick = () => {
    history.push(`/my/editProfile/${userId}`);
  };

  return (
    <>
      <IonHeader>
        <IonTitle> {`Hello ${user?.username}`}</IonTitle>
        <IonButton onClick={handleEditButtonClick}>
          <IonIcon slot="icon-only" icon={createOutline} />
        </IonButton>
      </IonHeader>
      <IonImg  src={user?.avatar} style={{
        width: '50%',
        height: '50%',
      }} />
      <IonList>
        {userData.map(({ label, value, icon }, index) => (
          <IonItem key={index}>
            <IonIcon slot="start" icon={icon} />
            <IonLabel>
              <h2>{label}</h2>
              <p>{value}</p>
            </IonLabel>
          </IonItem>
        ))}
      </IonList>
      {!isUserMode && (
        <IonList>
          <IonItem>
            <IonCheckbox slot="start" />
            <IonLabel>Walking with the dog</IonLabel>
          </IonItem>
          <IonItem>
            <IonCheckbox slot="start" />
            <IonLabel>Keeping the dog</IonLabel>
          </IonItem>
        </IonList>
      )}
      <IonToggle checked={!isUserMode} onIonChange={handleToggleChange} />
    </>
  );
};

export default UserProfile;
