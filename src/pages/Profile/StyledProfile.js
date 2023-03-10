import styled from 'styled-components';
import { IonContent } from '@ionic/react';

const StyledProfile = styled(IonContent).attrs({ className: 'ion-padding' })`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  
  .img {
    width: 40%;
    height: 40%;
    object-fit: cover;
    position: absolute;
  }
`;

export default StyledProfile;
