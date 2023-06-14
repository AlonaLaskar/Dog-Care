
import styled from 'styled-components';
import { IonPage } from '@ionic/react';

const StyledForgetPassword = styled(IonPage).attrs({className: 'ion-padding'})`
    flex-direction: column;
    justify-content: center;
    align-items: center;
.contener {
    width: 390px;
    height: 629px;
    background: #FFFFFF;
border-radius: 10px;
}
ion-input.input {
    
width: 319px;
height: 48px;
background: #FFFFFF;
border: 4px solid #024C71;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
}

ion-text.text {
font-family: 'Arial';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 18px;
display: flex;
align-items: center;
color: #3E3E3E;
}
ion-label.restartTitle {
    font-family: 'Arial';
font-style: normal;
font-weight: 700;
font-size: 22px;
line-height: 25px;
display: flex;
align-items: center;

color: #3E3E3E;
} 

ion-button.button {
width: 244px;
height: 48px;

color: #FFFFFF; 
background: #FB8500;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
} 


`;
  
export default StyledForgetPassword;
