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

    .dog {
      width: 39px;
      height: 39px;
      position: absolute;
      top: 2.65%;
      left: 41.58%;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }

    .bone {
      width: 76px;
      height: 40px;
      position: absolute;
      top: 32.36%;
      left: 36.41%;
      filter: drop-shadow(rgba(0, 0, 0, 0.25) 0px 4px 4px);
    }
  }


  
`;

export default StyledHeader;
