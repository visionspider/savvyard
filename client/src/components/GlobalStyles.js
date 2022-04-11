import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`



* {
    margin: 0; 
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
    font-size: 100%;
    vertical-align: baseline;
    text-decoration: none;
    color: black;
    background-color: white;
    
}
button {
    font-weight: bold;
  border-radius: 20px;
  background-color: #c2fbd7;
  border-radius: 100px;
  box-shadow: rgba(44, 187, 99, 0.2) 0 -25px 18px -14px inset,
    rgba(44, 187, 99, 0.15) 0 1px 2px, rgba(44, 187, 99, 0.15) 0 2px 4px,
    rgba(44, 187, 99, 0.15) 0 4px 8px, rgba(44, 187, 99, 0.15) 0 8px 16px,
    rgba(44, 187, 99, 0.15) 0 16px 32px;
  color: green;

  display: inline-block;

  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 1.5rem;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:hover {
    box-shadow: rgba(44, 187, 99, 0.35) 0 -25px 18px -14px inset,
      rgba(44, 187, 99, 0.25) 0 1px 2px, rgba(44, 187, 99, 0.25) 0 2px 4px,
      rgba(44, 187, 99, 0.25) 0 4px 8px, rgba(44, 187, 99, 0.25) 0 8px 16px,
      rgba(44, 187, 99, 0.25) 0 16px 32px;
    transform: scale(1.05) rotate(-1deg);
  }
}
body {
}

  
`;

export default GlobalStyle;
