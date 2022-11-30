import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
 ${reset}

html, body{
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
}

*,div {
  box-sizing: border-box;
}


ol, ul, li{
    list-style: none;
}

a {
  color: inherit;
  text-decoration: none;
}
`;

// @media (prefers-color-scheme: dark) {
//     html {
//       color-scheme: dark;
//     }
//     body {
//       color: white;
//       background: black;
//     }
