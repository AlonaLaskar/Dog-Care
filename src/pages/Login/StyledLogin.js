import styled from 'styled-components';
import { IonContent } from '@ionic/react';

const StyledLogin = styled(IonContent).attrs({ className: 'ion-padding .ion-justify-content-center' })`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 20px;
  width: auto;

  h1 {
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

    .form-group {
      display: flex;
      position: relative;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;

      label {
        color: ${({ theme }) => theme.colors.forms?.labelColor};
      }

      .error {
        color: ${({ theme }) => theme.colors.forms?.errorColor};
      }
      
    }
    .errorUser {
      color: ${({ theme }) => theme.colors.forms?.errorColor};
    }

    .form-buttons {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;

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

    .form-social,
    .form-social .form-buttons {
      gap: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5px;
      width: 100%;

      h3 {
        color: ${({ theme }) => theme.colors.forms?.labelColor};
        font-weight: 400;
      }

      .social-button {
        width: 240px;

        &#google {
          background-color: #4285f4;
          color: white;
        }

        &#facebook {
          background-color: #3b5998;
          color: white;
        }
      }
    }
  }
`;

export default StyledLogin;
