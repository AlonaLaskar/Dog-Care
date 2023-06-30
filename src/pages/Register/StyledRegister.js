import styled from 'styled-components';
import { IonPage } from '@ionic/react';

const StyledRegister = styled(IonPage).attrs({ className: 'ion-padding' })`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;

  ion-content {
    --background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .logo {
    text-align: center;
  }

  ion-card {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    max-width: 381px;
    width: 100%;
    border-radius: 10px;
    margin: auto;
    --padding-start: 10px;
    --padding-end: 10px;
    margin-bottom: 10px;
  }

  .subtitle span {
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
 
    font-family: 'Arial Rounded MT Bold';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;

    color: #024c71;
  }
  ion-input {
    box-sizing: border-box;
    background: #ffffff;
    border: 2px solid #024c71;
    border-radius: 10px;
    height: 37.76px;
  }
  ion-textarea {
    box-sizing: border-box;
    background: #ffffff;
    border: 2px solid #024c71;
    border-radius: 10px;
    --padding-start: 10px;
    --highlight-color-focused: none !important;
  }


  form ion-grid ion-input {
    height: 44px;
    min-height: 44px !important;
  }

  .password-wrapper {
    position: relative;
  }
  .password-wrapper ion-icon {
    position: absolute;
    top: 12px;
    right: 10px;
    z-index: 9;
    font-size: 20px;
  }
  .birthDate {
    --padding-end: 8px !important;
  }
  ion-button[type='submit'] {
    width: 100%;
    height: 48px;
    --background: rgb(251, 133, 0);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
    border-radius: 10px;
    margin: auto;
  }

  .textarea-bottom {
    padding-right: 10px;
    padding-bottom: 4px;
  }
  .location .css-13cymwt-control {
    box-sizing: border-box;
    background: #ffffff;
    border: 2px solid #024c71;
    border-radius: 10px;
    --padding-start: 10px;
    --highlight-color-focused: none !important;
  }
  .location {
    position:relative;
    z-index:99;
  }
  .location ion-icon {
    position: absolute;
    top: 17px;
    right: 48px;
    z-index: 9;
    font-size:22px;
  }
`;

export default StyledRegister;