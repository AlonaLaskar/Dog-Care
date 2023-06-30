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

ion-content{
  --background:transparent;
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
      &::part(content){
        width: 321px;
        height: 470px;
        margin: auto;
        border-radius: 12px;
      }
      .ion-page{
        padding:16px;
        display:block;
      }
      ion-item {
        border: 2px solid #024C71;
        border-radius: 8px;
        margin-top:12px;
      }
      ion-radio-group {
        display: flex;
        justify-content: space-around;
        margin: 12px 0 20px 0;
        ion-radio {
          --color: #4582a3;
          --color-checked: #024c71;
        }
      }
      ion-datetime-button {
        border: 2px solid #024c71;
        padding: 6px;
        border-radius: 10px;
        margin: 10px 0;
        justify-content: flex-start;
        width: fit-content;
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
    .content-pt-60 {
      --padding-top:60px;
    }

    

    .schedule-segment {
      --background: #024c71;
      height: 35px;
      color:#fff;
      border-radius:30px;
      max-width: 580px;
      margin: auto;
      @media (max-width:370px) {
        height: 35px;
        font-size:12px;
      }
      ion-segment-button {
        --indicator-color: #fb8500;
        --border-radius: 30px;
        --border-color: #fff;
      }
    }
    .customheader-schedule {
      margin-top:55px;
      box-shadow: none;
      ion-toolbar {
        --background: transparent;
      }
    }

    .availability-wrapper {
      height: calc(100vh - 210px);
      max-width:600px;
      margin:auto;
      // padding:0 10px;
    }
    .service-request-modal {
      ion-item {
        width: calc(100% - 20px);
        background: #ffffff;
        box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        margin: 30px auto;
        padding: 20px 0 5px 5px;
        position:relative;
        overflow:visible;
        ion-avatar {
          width:50px;
          height:50px;
        }
        ion-text {
          ion-icon {
            margin-right:12px;
            color: #fb8500;
          }
        }
        .buttons {
          left: 0;
          width: 100%;
          display: block;
          position: absolute;
          top: 0;
          .whatsappButton {
            position: absolute;
            top: -45px;
            background: #fff;
            border-radius: 100%;
            width: 45px;
            height: 45px;
            --padding-start: 0;
            --padding-end: 0;
            box-shadow: 0px 4px 8px 2px rgba(0, 0, 0, 0.25);
            left: -65px;
            ion-icon {
              font-size:24px;
              color: #fb8500;
            }
          }
          .callButton {
            position: absolute;
            top: -45px;
            background: #fff;
            border-radius: 100%;
            width: 45px;
            height: 45px;
            --padding-start: 0;
            --padding-end: 0;
            box-shadow: 0px 4px 8px 2px rgba(0, 0, 0, 0.25);
            right: 20px;
            color: #fb8500;
            ion-icon {
              font-size:24px;
              color: #fb8500;
            }
          }
        }
      }
    }
  /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius:10px;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #024c71;
    border-radius:10px;
    
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #024c71; 
  }
  `;

export default GlobalStyle;
