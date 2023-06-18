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
    contain: inherit;
    --padding-bottom: 15px;
    --padding-start: 20px;
    --padding-end: 20px;
  }

  .logo {
    text-align:center;

    .bone-logo {
      height: 45px;
      position: relative;
      top: -6px;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
    .dog-logo {
      height: 57px;
      bottom: -14px;
      position: relative;
      margin-right: 10px;
    }
  }
  ion-button {
    width:32px;
    height:32px;
    --padding-start:0;
    --padding-end:0;
  }
`;

export default StyledHeader;