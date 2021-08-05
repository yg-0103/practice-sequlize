import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }


  button {
    cursor: pointer;
  }

  ul,ol,dl,li {
    list-style: none;
  }
`
