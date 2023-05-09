import styled from 'styled-components';
import { IonPage } from '@ionic/react';

const StyledHome = styled(IonPage).attrs({ className: 'ion-padding' }).attrs({ className: 'ion-padding' })`
    align-items: center;
ion-header{
   
    font-weight: bold;

     > ion-toolbar {
    margin-top: 30px;
    display: block;
    position: relative;
    width: 100%;
   
    left: 0;
     }
}

ion-content {
    width: 100%;
    height: 100%;
 position :absolute ;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

ion-header > ion-toolbar .action-bar {
    color: #fff;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 40%;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    /* background-color: red; */

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
