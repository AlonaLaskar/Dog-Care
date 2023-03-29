import { IonButtons, IonToolbar, IonIcon, IonTitle } from '@ionic/react';
import StyledHeader from './StyledHeader';
import config from 'config';
import { auth } from '../../../firebase';
import { signOut } from 'firebase/auth';
import { logOut } from 'ionicons/icons';

const Header = () => {
  return (
    <StyledHeader>
      <IonToolbar>
        <IonTitle>{config.siteName}</IonTitle>
        <IonButtons slot="start" onClick={() => signOut(auth)}>
          <IonIcon icon={logOut} />
        </IonButtons>
      </IonToolbar>
    </StyledHeader>
  );
};

export default Header;
