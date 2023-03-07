import { IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import StyledHeader from './StyledHeader';
import config from 'config';

const Header = () => {
  return (
    <StyledHeader>
      <span>{config.siteName}</span>
    </StyledHeader>
  );
};

export default Header;
