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





body {
  background-image: url(${Background});
  
  /* button {
    box-sizing: border-box;
    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
    background: #FB8500;
    border-radius: 6px;
    height: 35px;
    width: 155px;
    left: 138px;
    top: 387px;
    border-radius: 6px;


    
          cursor: pointer;
          transition: opacity 0.3s ease-in-out;

          &:hover {
            opacity: 0.8;
            font-weight: bold;
          }
      } */

      
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
  `;

export default GlobalStyle;
