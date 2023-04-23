import styled from 'styled-components';
import { IonPage } from '@ionic/react';

const StyledHome = styled(IonPage).attrs({ className: 'ion-padding' }).attrs({ className: 'ion-padding' })`
ion-content {
    width: 100%;
    height: 100%;
}

ion-content >.card-stack-container {
    display: grid;
    grid-column: 1fr;
    grid-row: 1fr;
    width: 100%;
    height: 90%;
    /* background-color: green; */

}
ion-content > .card-stack-container > div{
    grid-column: 1/2;
    grid-row: 1/2;
    width: 100%;
    height: 70%;
    /* background-color: black; */
}

`;

export default StyledHome;
