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

  .contener {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    position: relative;
    height: 932px;
    width: 430px;
    left: 0px;
    top: 0px;
    border-radius: 0px;
  }

  .boneLogo {
    position: absolute;
    width: 331px;
    height: 145px;
    left: 50px;
    top: 286px;
  }
  .dogLogo {
    position: absolute;
    width: 162px;
    height: 176.01px;
    left: 134px;
    top: 189px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .form {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    .errorUser {
      color: ${({ theme }) => theme.colors.forms?.errorColor};
    }

    .form-buttons {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-top: 10px;
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
      position: absolute;
      width: 319px;
      height: 48px;
      left: 55px;
      top: 466px;
      background: #ffffff;
      border: 4px solid #024c71;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
    }
  }

  .social {
    .social-title {
      color: ${({ theme }) => theme.colors.forms?.labelColor};
      font-weight: 400;
    }
    .social-button {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5px;
      margin-right: 0%;

      &#google {
        background-color: #4285f4;
        color: white;
        width: 240px;
      }

      &#facebook {
        background-color: #3b5998;
        color: white;
        width: 240px;
      }
    }
  }

  .password {
    box-sizing: border-box;
    position: absolute;
    width: 319px;
    height: 48px;
    left: 55px;
    top: 538px;

    background: #ffffff;
    border: 4px solid #024c71;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }
  .forgetPassword {
    position: absolute;
    width: 136px;
    height: 17px;
    left: 121px;
    top: 644px;

    font-family: 'Arial';
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 17px;
    display: flex;
    align-items: center;
    text-decoration-line: underline;

    color: #3e3e3e;
  }
  .register {
    position: absolute;
    width: 252px;
    height: 18px;
    left: 50px;
    top: 610px;

    font-family: 'Arial';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
    text-decoration-line: underline;
    // On click
    // Navigate to: "Registration";
    // Animate: Smart animate;
    animation-timing-function: ease-out;
    animation-duration: 300ms;
    color: #3e3e3e;
  }
  .form-buttons {
    position: absolute;
    width: 120px;
    height: 48px;
    left: 153px;
    top: 685px;
    background: #fb8500;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
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
