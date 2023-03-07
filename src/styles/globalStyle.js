import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;

    * {
        font-family: 'Quicksand', 'Heebo', sans-serif;
    }
  }
`;

export default GlobalStyle;
