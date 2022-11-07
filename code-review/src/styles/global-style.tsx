import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
html, body{
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
}
* {
  box-sizing: border-box;
  font-family: sans-serif;
}

ol, ul, li{
    list-style: none;
}

a {
  color: inherit;
  text-decoration:none;
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
