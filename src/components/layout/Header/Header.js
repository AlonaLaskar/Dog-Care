import { IonButtons, IonToolbar, IonIcon, IonTitle, IonText, IonButton } from '@ionic/react';
import StyledHeader from './StyledHeader';
import config from 'config';
import { auth } from '../../../firebase';
import { logOutOutline } from 'ionicons/icons';
import { useUser } from 'hook/users';
import AuthContext from 'providers/AuthContext';
import { useContext } from 'react';
import { arrowBackOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';

const Header = () => {
  const { userId } = useContext(AuthContext) || {};
  const { user } = useUser(userId) || {};
  const history = useHistory();
  function hendeleLogout() {
    auth.signOut();
  }

  function hendeleBack() {
    history.goBack();
  }

  return (
    <StyledHeader>
      <IonToolbar>
        <IonTitle>{config.siteName}</IonTitle>
        <IonButtons slot="start" onClick={hendeleLogout} color="danger" expand="block">
          <IonIcon solt="start" icon={logOutOutline} />
        </IonButtons>
        <IonButtons slot="end" onClick={hendeleBack}>
          <IonIcon solt="end" icon={arrowBackOutline} />
        </IonButtons>
      </IonToolbar>
    </StyledHeader>
  );
};

export default Header;
