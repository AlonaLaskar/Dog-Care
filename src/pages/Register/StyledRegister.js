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
    // height: 100%;
    position: relative;
    max-width: 381px;
    width: 100%;
    // height: 649px;
    border-radius: 10px;
    margin: auto;
    --padding-start: 10px;
    --padding-end: 10px;
    margin-bottom: 10px;
  }

  .subtitle span {
    // position: absolute;
    // width: 350px;
    // height: 60px;
    // left: 12px;
    // top: 65px;
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
    // position: absolute;
    // width: 106px;
    // height: 32px;
    // left: 128px;
    // top: 14px;
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
  // ion-input.email {
  //   // position: absolute;
  //   // width: 375px;
  //   // height: 37.76px;
  //   // left: 1.71px;
  //   // top: 218.64px;
  // }
  // .passwordtotal {
  //   position: absolute;
  //   width: 375px;
  //   height: 37.76px;
  //   left: 1.71px;
  //   top: 302.64px;
  // }

  // ion-input.fullName {
  //   position: absolute;
  //   width: 185px;
  //   height: 37.76px;
  //   left: 1.71px;
  //   top: 167.51px;

  // }
  //   ion-lable.fullName {
  //   }
  // ion-input.password {
  //     position: absolute;
  //     width: 175.86px;
  //     height: 37.76px;
  //     left: 4.14px;
  //     top: 336.77px;

  //   }
  //   ion-icon.password {
  //     position: absolute;
  //     width: 17px;
  //     height: 24px;
  //     left: 179px;
  //     top: 351px;
  //     color: #024c71;

  //   }
  //   ion-input.verifyPassword {
  //     position: absolute;
  //     width: 185px;
  //     height: 37.76px;
  //     left: 194px;
  //     top: 336.77px;

  //   }
  //   ion-input.tel {
  //     position: absolute;
  //     width: 175.86px;
  //     height: 37.76px;
  //     left: 4.14px;
  //     top: 272.51px;

  //   }
  //   ion-input.aboutMe {
  //     position: absolute;
  //     width: 371.13px;
  //     height: 80.76px;
  //     left: 4.14px;
  //     top: 408.64px;

  //   }
  .location {
    // position: absolute;

    // left: 194px;
    // top: 271.51px;

    //   .css-13cymwt-control{
    //   box-sizing: border-box;
    //   background: #ffffff;
    //   border: 2px solid #024c71;
    //   width: 185px;
    //   height: 37.76px;
    //   border-radius: 10px;
    //   display: flex;
    //   position: fixed;
    // }
    // .css-1xc3v61-indicatorContainer{

    // }
    // .css-1jqq78o-placeholder{

    // }
  }
  // ion-input.birthDate {
  //   position: absolute;
  //   width: 186.86px;
  //   height: 37.76px;
  //   left: 191.71px;
  //   top: 168.77px;

  // }
  // .form-group {
  //   position: absolute;
  //   width: 371.13px;
  //   height: 80.76px;
  //   left: 4.11px;
  //   top: 523.64px;
  // }
  // p {
  //   position: absolute;
  //   width: 371.13px;
  //   height: 80.76px;
  //   left: 89.87px;
  // }
  // .sc-ion-input-md-h:not(.legacy-input) {
  //   --padding-start: 10px;
  //   min-height: 33px;
  // }
  // .contener {
  //   position: absolute;
  //   width: 80px;
  //   height: 100px;
  //   left: 45%;
  //   top: 2%;
  // }

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
