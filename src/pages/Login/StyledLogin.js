import styled from 'styled-components';
import { IonPage } from '@ionic/react';

const StyledLogin = styled(IonPage).attrs({ className: 'ion-padding .ion-justify-content-center' })`
  align-items: center;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
  font-family: Roboto;
  font-style: normal;
  height: 100%;

  ion-content {
    --background: transparent;
    display:flex;
    align-items:center;
    justify-content:center;
    height:100%;
  }

  .password-wrapper {
    position:relative;
  }

  .password-wrapper ion-icon {
    position: absolute;
    top: 12px;
    right: 16px;
    z-index: 9;
  }

  .contener {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    position: relative;
    // height: 932px;
    max-width: 430px;
    width:100%;
    left: 0px;
    top: 0px;
    border-radius: 0px;
    margin: auto;
  }


  .dogLogo {
    width: 162px;
    height: 176.01px;
    margin-bottom: -82px;
 
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .form {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top:24px;

    .errorUser {
      color: ${({ theme }) => theme.colors.forms?.errorColor};
    }

    .form-buttons {
      display: flex;
      align-items: center;
      justify-content:center;
   
    }

    .primary-button {
      background-color: ${({ theme }) => theme.colors.forms?.primaryButtonColor};
      color: ${({ theme }) => theme.colors.forms?.primaryButtonTextColor};
    }

    .secondary-button {
      background-color: ${({ theme }) => theme.colors.forms?.secondaryButtonColor};
      color: ${({ theme }) => theme.colors.forms?.secondaryButtonTextColor};
      text-decoration: underline;
    }
    .email {
      box-sizing: border-box;
      position: relative;
      width: 100%;
      height: 48px;
      --padding-start:10px;
      // left: 55px;
      // top: 466px;
      background: #ffffff;
      border: 4px solid #024c71;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      margin-bottom: 24px;
    }
  }

 
  

  .password {
    box-sizing: border-box;
    // position: absolute;
    width: 100%;
    height: 48px;
    margin-bottom: 24px;
    --padding-start:10px;
    // left: 55px;
    // top: 538px;

    background: #ffffff;
    border: 4px solid #024c71;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }
  .native-input {
    height:48px;
  }
  ion-input {
    --highlight-color-focused:none;
  }
  .forgetPassword {
    // position: absolute;
    width: 100%;
    height: 17px;
    // left: 121px;
    // top: 644px;

    font-family: 'Arial';
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 17px;
    display: flex;
    align-items: center;
    text-decoration-line: underline;
    justify-content:center;
    margin-bottom:24px;
    color: #3e3e3e;
  }
  .register {
    // position: absolute;
    width: 100%;
    height: 18px;
    margin-bottom:1rem;
    // left: 50px;
    // top: 610px;

    font-family: 'Arial';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
    justify-content:center;
    text-decoration-line: underline;
    // On click
    // Navigate to: "Registration";
    // Animate: Smart animate;
    animation-timing-function: ease-out;
    animation-duration: 300ms;
    color: #3e3e3e;
  }
  .form-buttons {
    // position: absolute;
    width: 120px;
    height: 48px;
    // left: 153px;
    // top: 685px;
    background: #fb8500;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    margin:auto;
  }
  ion-icon {
    font-size: 30px;
  }
 
  ion-input {
    width: 310px;
    height: 34px;


  }
`;

export default StyledLogin;
