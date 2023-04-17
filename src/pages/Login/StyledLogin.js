import styled from 'styled-components';
import { IonPage } from '@ionic/react';

const StyledLogin = styled(IonPage).attrs({ className: 'ion-padding .ion-justify-content-center' })`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 20px;
  width: auto;

  .form-title {
    color: ${({ theme }) => theme.colors?.pageTitle};
    margin: 0;
    padding: 0 0 20px;
  }

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 20px;

    .errorUser {
      color: ${({ theme }) => theme.colors.forms?.errorColor};
    }

    .form-buttons {
      display: flex;
      align-items: center;
      justify-content: center;
      align-items: center;
      margin-right: 50%;
      width: 0;
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
`;

export default StyledLogin;
