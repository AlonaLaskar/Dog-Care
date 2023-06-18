//!React+Ionic
import { useHistory } from 'react-router-dom';
import { IonButton, IonToolbar, IonIcon } from '@ionic/react';
import { arrowBackOutline,logOutOutline } from 'ionicons/icons';
//!Firebase
import { auth } from '../../../firebase';
//!Styles
import dogLogo from '../../../../src/assets/dogLogo.png';
import boneLogo from '../../../../src/assets/boneLogo.png';
import StyledHeader from './StyledHeader';

const Header = () => {
  const history = useHistory();
//LogOut from the app 
  function hendeleLogout() {
    auth.signOut();
  }
//Go back to the previous page
  function hendeleBack() {
    history.goBack();
  }

  return (
    <StyledHeader>
      <IonToolbar>
        <IonButton slot="start" shape="round" size="small" onClick={hendeleBack}>
          <IonIcon slot="icon-only" icon={arrowBackOutline}></IonIcon>
        </IonButton>
        <div className="logo">
          <img src={dogLogo} className="dog-logo" />
          <img className="bone-logo" src={boneLogo} />
        </div>
        <IonButton slot="end" shape="round" size="small" onClick={hendeleLogout}>
          <IonIcon slot="icon-only" icon={logOutOutline}></IonIcon>
        </IonButton>
      </IonToolbar>
    </StyledHeader>
  );
};

export default Header;