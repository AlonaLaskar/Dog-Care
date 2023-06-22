import styled from 'styled-components';
import { IonPage } from '@ionic/react';

const StyledEditProfile = styled(IonPage).attrs({ className: 'ion-padding' })`
  ion-card.card {
    max-width: 580px;
    width: 100%;
    border-radius: 10px;
    margin: auto;
    overflow-y: auto;

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

    .user-pic {
      width: 130px;
      margin: auto;
      position: relative;
    }

    .editAvatar {
      width: 40px;
      height: 40px;
      background: rgb(251, 133, 0);
      border-radius: 50px;
      --padding-end: 0;
      --padding-start: 0;
      position: absolute;
      right: -5px;
      --border-radius: 100%;
      --box-shadow: 0px 2px 3px #00000061;
      ion-icon {
        font-size: 24px;
      }
    }

    ion-input {
      height: 45px;
      min-height: 45px;
      margin-top:0;
      margin-bottom:10px;
    }
    ion-textarea {
      box-sizing: border-box;
      background: #ffffff;
      border: 2px solid #024c71;
      border-radius: 10px;
      --padding-start: 10px;
      --highlight-color-focused: none !important;
    }
    .textarea-bottom {
      padding-right: 10px;
      padding-bottom: 4px;
    }
    ion-img {
      width: 130px;
      height: 130px;
      border-radius: 100%;
      object-fit: cover;
      overflow: hidden;
      margin: auto;
    }

    ion-label {
      font-family: 'Nunito';
      font-style: normal;
      font-weight: 700;
      font-size: 15px;
      line-height: 20px;
      color: #024c71;
    }

    ion-card-contect ion-input.fullName {
      width: 331px;
      left: 26px;
      top: 221px;
      border-radius: 10px;
    }
    ion-card-contect ion-label.fullName {
    }


    span {
      color: #fff;
    }

    ion-button {
      border-radius: 10px;
      max-width: 200px;
      margin: 12px auto;
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
