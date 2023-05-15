import { IonButtons, IonToolbar, IonIcon, IonTitle,IonText } from '@ionic/react';
import StyledHeader from './StyledHeader';
import config from 'config';
import { auth } from '../../../firebase';
import { logOutOutline } from 'ionicons/icons';
import { useUser } from 'hook/users';
import AuthContext from 'providers/AuthContext';
import { useContext } from 'react';


const Header = () => {
  const { userId } = useContext(AuthContext) || {};
  const { user } = useUser(userId) || {};
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
          {/* <IonText className='hello'>{ `Hello ${user?.username}`}</IonText> */}
      </IonToolbar>
    </StyledHeader>
  );
};

export default Header;
