
import styled from 'styled-components';
import { IonContent } from '@ionic/react';


const Styledpost = styled(IonContent).attrs({ className: 'ion-padding' })`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: '2%';


  h1 {
    color: ${({ theme }) => theme.colors?.pageTitle};
    margin: 0;
    padding: 0 0 20px;
  }
  input.native-input.sc-ion-input-ios {
    font-family: 'Heebo';
  }
`;

export default Styledpost;
