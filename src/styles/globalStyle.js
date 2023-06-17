import { createGlobalStyle } from 'styled-components';
import Background from '../assets/Background.png';

const GlobalStyle = createGlobalStyle`

html, body {
  direction: ltr;
}

ion-header .globalHeader {
  position: absolute;
  top:1%;
  left: 0;
  right: 0;
  background: pink;
  color: #fff; 
  display: flex;
  align-items: center;

}

ion-input {
  box-sizing: border-box;
  background: rgb(255, 255, 255);
  border: 2px solid rgb(2, 76, 113);
  --padding-start:10px !important;
  --highlight-color-focused:none !important;
  border-radius: 10px;
}

.label-outer {
  color:#024C71;
  font-family:Nunito;
  font-size:16px;
  margin-bottom:5px;
  display:block;
  font-weight:500;
  display:none;
}



body {
  background-image: url(${Background});
      
      input {
          width: 100%;
          height: 40px;
          border: 1px solid ${({ theme }) => theme.colors.forms?.borderColor};
          border-radius: 5px;
          padding: 15px;
          outline: none;
          &:focus {
            border: 1px solid ${({ theme }) => theme.colors.forms?.borderColorFocus};
          }
      }
    }
    ion-tab-bar {
      height: 65px;
      --color-selected:#024C71;
      padding-inline-start:16px;
      padding-inline-end:16px;
      --color: #024c7191;
    }
    ion-modal.filter{
      box-shadow: 0px 0px 20px #0000005c;
      border-radius: 10px;
      align-items:flex-start;
      .ion-page{
        padding:16px;
        display:block;
      }
      ion-item {
        border: 2px solid #024C71;
        border-radius: 8px;
        margin-top:12px;
      }
      .close-button {
        --padding-start: 10px;
        --padding-end: 10px;
      }
      .range-has-pin {
        padding-top:16px;
      }
      .filter-modal-title {
        display:flex;
        align-items:center;
        justify-content:space-between;
        h3{
          margin:0;
          color:#024C71;
        }
      }
    }
  `;

export default GlobalStyle;