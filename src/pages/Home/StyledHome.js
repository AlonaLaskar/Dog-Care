import styled from 'styled-components';
import { IonPage } from '@ionic/react';

const StyledHome = styled(IonPage).attrs({ className: 'ion-padding' }).attrs({ className: 'ion-padding' })`
align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;

ion-content {
    --background: none;
}


ion-segment-button {
    border-radius: 10px;
    align-items: center;
    position: relative;
}
ion-header {
  
    border-radius: 10px;
    align-items: center;
    position: relative;
    top: 52px;

}
ion-content >.card-stack-container {
    margin-top: 49px;
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
img{
    width: 364px;
    height: 457px;
    position: relative;
    top: 52px;
    border-radius: 10px;
    align-items: center;
}
ion-label.noavila{
    font-family: Nunito;
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 106.4%;
    display: flex;
    text-align: center;
    top: 41px;
    color: rgb(2, 76, 113);
    position: relative;
    border-radius: 10px;
    -webkit-box-align: center;
    align-items: center;
}
ion-icon.filterIcon{
    position: relative;
    top: 52px;
    left: 150px;
    border-radius: 10px;
    align-items: center;
    width: 50px;
    height: 50px;
    font-size: 25px;

}
ion-button.filter-button{
 
    border-radius: 10px;
    align-items: center;
    height: 60px;
    width: 60px;

    position: relative;
    top: 52px;
    left: 150px;

    --border-radius: 35px;
    --padding-start: 0;
    --padding-end: 0;
    --padding-top: 0;
    --padding-bottom: 0;
    --background:  #8ECAE6;
    --background-activate: #5587aa;
    --background-focused: #fff;
    top: -62px;
    left: -1px;

}
.button-inner{
    width: 50px;
    height: 50px;
}


ion-content  ion-modal.filter ion-button.close{
    
position: absolute;
width: 51px;
height: 23px;
left: 190px;
top: 631px;

font-family: 'Arial';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 115.4%;
/* identical to box height, or 23px */

display: flex;
align-items: center;

color: #024C71;
}



`;

export default StyledHome;
