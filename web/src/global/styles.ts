import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }
  html, body, #hoot {
    max-height:100vh;
    max-width:100vw;

    height: 100%;
    width:100%;
  }
  *, button, input {
    border: 0px;
    background:none;
    font-family: --apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  button {
    cursor: pointer;
  }
  :root {
    --primary: #36393f;
    --secondary: #2F3136;
    --tertiary: #202225;
    --quaternary:#40444B;
    --quinternary:#7A7C80;

    --red-primary: #f84a4b;
    --red-secondary: #731e34;
    --red-tertiary:#790914;
    --red-quaternary:#4B4545;

    --black:#000;

    --white: #fff;
    --ready: #f9a839;
    --sent: #0e8923;

  }
`;
