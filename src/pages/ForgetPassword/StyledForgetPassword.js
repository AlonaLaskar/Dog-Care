import styled from 'styled-components';
import { IonPage } from '@ionic/react';

const StyledForgetPassword = styled(IonPage).attrs({ className: 'ion-padding' })`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ion-content {
    --background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .contener {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    position: relative;
    max-width: 430px;
    width:100%;
    left: 0px;
    top: 0px;
    border-radius: 0px;
    margin: auto;
  }
  form {
    width:100%;
  }
  ion-input.input {
    width: 100%;
    height: 48px;
    background: #ffffff;
    border: 4px solid #024c71;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    margin-bottom:24px;
  }
  .native-input {
    height:48px;
  }

  ion-text.text {
    font-family: 'Arial';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
    justify-content:center;
    text-align:center;
    color: #3e3e3e;
    margin-bottom:24px;
  }
  ion-label.restartTitle {
    font-family: 'Arial';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 25px;
    display: flex;
    align-items: center;
    margin-bottom:10px;

    color: #3e3e3e;
  }

  ion-button.button {
    width: 244px;
    height: 48px;

    color: #ffffff;
    background: #fb8500;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    margin: auto;
  }
`;

export default StyledForgetPassword;
