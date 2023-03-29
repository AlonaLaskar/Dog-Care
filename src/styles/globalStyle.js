import { createGlobalStyle } from 'styled-components';
const isLoginRoute = window.location.pathname.startsWith('/login');

const GlobalStyle = createGlobalStyle`

  ion-tab-bar{
    display: ${isLoginRoute && 'none'};
  }
  
  html, body {
    direction: rtl;
  }

  body {
    background-color: ${({ theme }) => theme.colors.backgroudSite};
    * {
        font-family: 'Quicksand', 'Heebo', sans-serif;
    }

    
    button {
        width: 150px;
        height: 40px;
        border: none;
        border-radius: 5px;
        outline: none;
        cursor: pointer;
        transition: opacity 0.3s ease-in-out;

        &:hover {
          opacity: 0.8;
          font-weight: bold;
        }
    }

    
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
