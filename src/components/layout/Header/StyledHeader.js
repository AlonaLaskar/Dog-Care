import styled from 'styled-components';
import { IonHeader } from '@ionic/react';

const StyledHeader = styled(IonHeader)`
  align-items: center;
  justify-content: center;
  display: inline-flex;
  flex-direction: inherit;
  display: flex;
  justify-content: space-between;

  ion-toolbar {
    height: 60px;
    width: 100%;

  }

  .logo {
    align-items: center;
    justify-content: center;
    display: inline-flex;
    flex-direction: inherit;

    .logo {
      width: 100px;
      height: 57px;
      position: absolute;
      top: 2.65%;
      left: 41.58%;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }


  }


  
`;

export default StyledHeader;
