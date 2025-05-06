import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-size: 16px;
    font-family: 'Inter', sans-serif;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.font.body};
    min-height: 100vh;
  }

  button {
    cursor: pointer;
  }

`;
