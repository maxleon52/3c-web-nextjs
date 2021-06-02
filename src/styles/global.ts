import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  :root {
    --blue-900: #495464;
    --grey-300: #BBBFCA;
    --white-200: #E8E8E8;
    --white-100: #F4F4F2;
    --white-000: #FFF;
  }

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }
  button {
    cursor: pointer;
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  // Tudo é construindo usando REM 
  // 16px para Descktop

  html {
    // Tablets
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    // Mobiles
    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background-color: var(--white-000);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Overlock', cursive, sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }
 
`;
