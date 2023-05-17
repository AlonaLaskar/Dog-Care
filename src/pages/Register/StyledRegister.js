import styled from 'styled-components';
import { IonPage } from '@ionic/react';

const StyledRegister = styled(IonPage).attrs({ className: 'ion-padding' })`
  align-items: center;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
  font-family: Roboto;
  font-style: normal;
  height: 100%;

  ion-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    position: relative;

    width: 381px;
    height: 649px;
    border-radius: 10px;
    position: relative;
    top: 0px;
    left: 0px;
    
  }



  .subtitle span {
    position: absolute;
    width: 350px;
    height: 60px;
    left: 12px;
    top: 65px;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;
  }

  ion-card-title {
    position: absolute;
    width: 106px;
    height: 32px;
    left: 48px;
    top: 14px;

    font-family: 'Arial Rounded MT Bold';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 32px;
    display: flex;
    align-items: center;

    color: #024c71;
  }
  ion-input.email {
    box-sizing: border-box;
    position: absolute;
    width: 375px;
    height: 37.76px;
    left: 1.71px;
    top: 218.64px;
    background: #ffffff;
    border: 2px solid #024c71;
    border-radius: 10px;
  }

  ion-input.fullName {
    box-sizing: border-box;
    position: absolute;
    width: 185px;
    height: 37.76px;
    left: 1.71px;
    top: 167.51px;
    background: #ffffff;
    border: 2px solid #024c71;
    border-radius: 10px;
  }
  ion-input.password {
    box-sizing: border-box;
    position: absolute;
    width: 175.86px;
    height: 37.76px;
    left: 4.14px;
    top: 336.77px;
    background: #ffffff;
    border: 2px solid #024c71;
    border-radius: 10px;
  }
  ion-input.verifyPassword {
    box-sizing: border-box;
    position: absolute;
    width: 185px;
    height: 37.76px;
    left: 194px;
    top: 336.77px;

    background: #ffffff;
    border: 2px solid #024c71;
    border-radius: 10px;
  }
  ion-input.tel {
    box-sizing: border-box;
    position: absolute;
    width: 175.86px;
    height: 37.76px;
    left: 4.14px;
    top: 272.51px;
    background: #ffffff;
    border: 2px solid #024c71;
    border-radius: 10px;
  }
  ion-input.aboutMe {
    box-sizing: border-box;
    position: absolute;
    width: 371.13px;
    height: 80.76px;
    left: 4.14px;
    top: 408.64px;
    background: #ffffff;
    border: 2px solid #024c71;
    border-radius: 10px;
  }
  ion-input.address {
    box-sizing: border-box;
    position: absolute;
    width: 185px;
    height: 37.76px;
    left: 194px;
    top: 271.51px;
    background: #ffffff;
    border: 2px solid #024c71;
    border-radius: 10px;
  }
  ion-input.birthDate {
    box-sizing: border-box;
    position: absolute;
    width: 186.86px;
    height: 37.76px;
    left: 191.71px;
    top: 168.77px;
    background: #ffffff;
    border: 2px solid #024c71;
    border-radius: 10px;
  }
  .form-group {
    position: absolute;
    width: 371.13px;
    height: 80.76px;
    left: 4.11px;
    top: 523.64px;
  }
  p {
    position: absolute;
    width: 371.13px;
    height: 80.76px;
    left: 89.87px;
  }
  .sc-ion-input-md-h:not(.legacy-input) {
    --padding-start: 10px;
    min-height: 33px;
  }
  .contener {
    position: absolute;
    width: 80px;
    height: 100px;
    left: 45%;
    top: 2%;
  }
`;

export default StyledRegister;
