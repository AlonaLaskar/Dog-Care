import styled from 'styled-components';
import { IonPage } from '@ionic/react';

const StyledHome = styled(IonPage).attrs({ className: 'ion-padding' }).attrs({ className: 'ion-padding' })`

ion-content {
    --background: none;
}
ion-segment {
    margin-top: 35px;
    width: 100%;
    height:100%;
    margin-bottom: 10px;
    border-radius: 10px;
    align-items: center;


ion-segment-button {



}
}
ion-content >.card-stack-container {
    margin-top: 26px;
    align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
    display: grid;
    grid-column: 1fr;
    grid-row: 1fr;
  

}
ion-content > .card-stack-container > div{
    grid-column: 1/2;
    grid-row: 1/2;

}

`;

export default StyledHome;
