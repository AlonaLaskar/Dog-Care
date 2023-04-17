import styled from 'styled-components';
import { IonPage } from '@ionic/react';

const Styledcomments = styled(IonPage).attrs({ className: 'ion-padding' })`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 20px;
  width: auto;
`;

export default Styledcomments;
