import { IonTitle, IonToolbar } from '@ionic/react';
import StyledHeader from './StyledHeader';
import config from 'config';

const Header = () => {
  return (
    <StyledHeader>
      <IonToolbar>
        <IonTitle>{config.siteName}</IonTitle>
      </IonToolbar>
    </StyledHeader>
  );
};

export default Header;
