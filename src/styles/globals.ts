import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
  }

:root {
  --white: #FFFFFF;
  --main-background: #F0F0F5;
  --text-bar: #828282;
  --color-shadow: #5F5F5F;
  --right-background: #99F0F5;
  --input-placeholder: #B9B989;
  --text-get-in: #5F5F5F;
  --input-border-login: #2AB5E1;
  --cpf-placeholder: #29B4E0;
  --save-button-background: #14C7D2;
  --login-button-left: #0CC4D0;
  --login-button-right: #9EF1F6;
  --company-left: #7D7D7D;
  --company-right: #2AB5E1;
  --exit-button-left: #0CC4D0;
  --exit-button-right: #9EF1F6;
  --free: #55F10B;
  --not-free: #E82417;
  --text-black: #1A2224;
}

@media(max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media(max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }
  html, body {
    min-height: 100vh;
  }
`

export default GlobalStyle
