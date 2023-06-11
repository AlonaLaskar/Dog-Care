import styled from 'styled-components';
import { IonPage } from '@ionic/react';

const StyledEditProfile = styled(IonPage).attrs({ className: 'ion-padding' })`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;

  ion-card.card {
    height: 90%;
    width: 388px;
    border-radius: 10px;
    position: relative;
    top: 2%;
    left: 0%;

    ion-card-title {
      font-family: 'Arial Rounded MT Bold';
      font-style: normal;
      font-weight: 400;
      font-size: 28px;
      line-height: 32px;
      display: flex;
      align-items: center;
      color: #024c71;
    }
    ion-card-header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
 
    ion-img {
        width: 350px;
    height: 200px;
                border-radius: 50%;
        position: absolute;
        top: 10%;
        left: 0%;
        }
    }
    
    ion-card-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 10%;
        left: 0%;
        width: 100%;
        height: 100%;
    }
 

    ion-label {
      font-family: 'Nunito';
      font-style: normal;
      font-weight: 700;
      font-size: 15px;
      line-height: 20px;
      display: flex;
      align-items: center;
      color: #024c71;
    }

    ion-card-contect ion-input.fullName {
      width: 331px;
      left: 26px;
      top: 221px;
      border-radius: 10px;
    }
    ion-card-contect ion-label.fullName {
      position: absolute;
      left: 6.7%;
      right: 74.23%;
      top: 32.27%;
      bottom: 64.55%;
    }
    .sc-ion-input-md-h {
    margin-top: 10px;
    display: block;
    position: relative;
    width: 100%;
    padding: 0 !important;
    color: var(--ion-color-step-850, #000000);
    font-family: var(--ion-font-family, inherit);
    z-index: 2;
}

  span{
    color: #fff;
  }

  ion-button {
    position: absolute;
    top: 90%;
    left: 29%;
    border-radius: 10px;
  

}
  }
  ion-action-sheet.my-custom-class {
  --background: #f58840;
  --backdrop-opacity: 0.6;
  --button-background-selected: #e97223;
  --button-color: #000000;
  --color: #fff;
  /* role: "destructive" button iOS styling override */
  --ion-color-danger: #000000;
}
`;

export default StyledEditProfile;
