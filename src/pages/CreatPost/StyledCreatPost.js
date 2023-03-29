import styled from 'styled-components';
import { IonContent } from '@ionic/react';

const StyledCreatPost = styled(IonContent).attrs({ className: 'ion-padding' })`
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
  input.native-input.sc-ion-input-ios {
    font-family: 'Heebo';
  }
  ion-label#ion-input-10-lbl {
    line-height: 16px;
    transition: all 0.3s ease-in-out;
    font-family: 'Heebo';
  }

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    border: 1px solid rgb(227, 213, 202);
   border-radius: 5px;

    .form-group {
      display: flex;
      position: relative;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      /* margin: 1px; */
      border: 2px;
      padding: 10px; /* This adds 10px of padding inside the border, giving some space between the border and the text */
      font-size: 16px; /* This sets the font size to 16px */
    }
    .native-textarea.sc-ion-textarea-md {
      border: 1px solid rgb(227, 213, 202);
      border-radius: 5px;
      outline: none;
      height: 5cm;
      line-height: 16px;
        transition: all 0.3s ease-in-out;
       font-family: 'Heebo';
    }
    .form-buttons {
      display: flex;
      align-items: center;
      gap: 20px;
      width: 100%;
      justify-content: center;
      align-items: center;
      

      .primary-button {
        background-color: ${({ theme }) => theme.colors.forms?.primaryButtonColor};
        color: ${({ theme }) => theme.colors.forms?.primaryButtonTextColor};
      }
    }
  }
`;

export default StyledCreatPost;
