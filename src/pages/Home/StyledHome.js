import styled from 'styled-components';
import { IonPage } from '@ionic/react';

const StyledHome = styled(IonPage).attrs({ className: 'ion-padding' }).attrs({ className: 'ion-padding' })`
margin-top: 28px;
ion-content {
    --background: none;
    
}
ion-content >.card-stack-container {
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
