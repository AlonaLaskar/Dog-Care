import styled from 'styled-components';
import { IonPage } from '@ionic/react';

const StyledRegister = styled(IonPage).attrs({ className: 'ion-padding' })`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  h1 {
    color: ${({ theme }) => theme.colors?.pageTitle};
    margin: 0;
    padding: 0 0 20px;
  }
  /* input.native-input.sc-ion-input-ios {
    font-family: 'Heebo';
  }
  ion-label#ion-input-10-lbl {
    line-height: 16px;
    transition: all 0.3s ease-in-out;
    font-family: 'Heebo';
  }
  ion-label#ion-input-6-lbl {
    flex-basis: auto;
    line-height: 16px;
    transition: all 0.3s ease-in-out;
    font-family: 'Heebo';
    margin: 25px;
  }
  .item-has-focus,
  .item-has-value {
    ion-label#ion-input-10-lbl {
      transform: scale(1);
      font-size: 12px;
    }
  } */
  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    .form-group {
      display: flex;
      position: relative;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 10px;
      .error{
        color: ${({ theme }) => theme.colors.forms?.errorColor};
      }
      /* .ion-item {
        font-family: 'Heebo';
        .item-native {
          background-color: black;
        }
      } */
    }
    .form-buttons {
      display: flex;
      align-items: center;
      gap: 20px;
      width: 100%;
      .primary-button {
        background-color: ${({ theme }) => theme.colors.forms?.primaryButtonColor};
        color: ${({ theme }) => theme.colors.forms?.primaryButtonTextColor};
      }
    }
  }
`;

export default StyledRegister;
