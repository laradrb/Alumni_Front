import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
}
html, body {
    margin: 0;
    padding: 0;
    height: 100%; 
    width: 100%;
    font-family: 'poppins Bold'; 
}
h1{
font-size: 24px;
}
p{
font-size: 18px;
}
`;



export default GlobalStyle;