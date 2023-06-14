import { IonButtons, IonToolbar, IonIcon, IonTitle, IonImg, IonHeader } from '@ionic/react';
import StyledHeader from './StyledHeader';
import config from 'config';
import { auth } from '../../../firebase';
import { logOutOutline } from 'ionicons/icons';
import { useUser } from 'hook/users';
import AuthContext from 'providers/AuthContext';
import { useContext } from 'react';
import { arrowBackOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import dogLogo from '../../../../src/assets/dogLogo.png';
import boneLogo from '../../../../src/assets/boneLogo.png';
import LOGO from '../../../../src/assets/LOGO.png';


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
     
        <div className='logo'>
        <img src={LOGO} className='logo'/>
        </div>
        <IonButtons slot='start' onClick={hendeleLogout} color='danger' expand='block'>
          <IonIcon solt='start' icon={logOutOutline} size='large'/>
        </IonButtons>
        <IonButtons slot='end' onClick={hendeleBack}>
          <IonIcon solt='end' icon={arrowBackOutline} size='large' />
        </IonButtons>
      </IonToolbar>
    </StyledHeader>
  );
};

export default Header;
