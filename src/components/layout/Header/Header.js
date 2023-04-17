import { IonButtons, IonToolbar, IonIcon, IonTitle } from '@ionic/react';
import StyledHeader from './StyledHeader';
import config from 'config';
import { auth } from '../../../firebase';
import { logOutOutline } from 'ionicons/icons';


const Header = () => {
    function hendeleLogout(){
      auth.signOut();
    }
  return (
    <StyledHeader>
      <IonToolbar  >
        <IonTitle>{config.siteName}</IonTitle>
        <IonButtons slot="start" onClick={hendeleLogout} color="danger" expand="block">
          <IonIcon solt='start' icon={logOutOutline}  />
        </IonButtons>

      </IonToolbar>
    </StyledHeader>
  );
};

export default Header;
