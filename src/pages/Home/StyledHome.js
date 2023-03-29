import styled from 'styled-components';
import { IonContent } from '@ionic/react';

const StyledHome = styled(IonContent).attrs({ className: 'ion-padding' }).attrs({ className: 'ion-padding' })`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: red;
`;

export default StyledHome;
