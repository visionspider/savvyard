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
    div {
        background-color: white;
    }
    
    
}
button {
    cursor: pointer;
    font-weight: bold;
    width: 99%;
  border-radius: 20px;
  background-color: #c2fbd7;
  border-radius: 100px;
  box-shadow: rgba(44, 187, 99, 0.2) 0 -25px 18px -14px inset,
    rgba(44, 187, 99, 0.15) 0 1px 2px, rgba(44, 187, 99, 0.15) 0 2px 4px,
    rgba(44, 187, 99, 0.15) 0 4px 8px, rgba(44, 187, 99, 0.15) 0 8px 16px,
    rgba(44, 187, 99, 0.15) 0 16px 32px;
  color: green;
  text-shadow: 1px 1px 1px #A6D7B8;
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

  &.cancel{
    color: white;
    background-color: #f44336;
    box-shadow: rgba(244, 67, 54, 0.2) 0 -25px 18px -14px inset,
        rgba(244, 67, 54, 0.15) 0 1px 2px, rgba(44, 187, 99, 0.15) 0 2px 4px,
        rgba(244, 67, 54, 0.15) 0 4px 8px, rgba(44, 187, 99, 0.15) 0 8px 16px,
        rgba(244, 67, 54, 0.15) 0 16px 32px;

    &:hover {
        box-shadow: rgba(244, 67, 54, 0.35) 0 -25px 18px -14px inset,
        rgba(244, 67, 54, 0.25) 0 1px 2px, rgba(44, 187, 99, 0.25) 0 2px 4px,
        rgba(244, 67, 54, 0.25) 0 4px 8px, rgba(44, 187, 99, 0.25) 0 8px 16px,
        rgba(244, 67, 54, 0.25) 0 16px 32px;
        transform: scale(1.05) rotate(-1deg);
    }
  }
}

input{
    outline: none;
    padding: 1%;
    border: solid 2px lightgray;
    border-radius: 20px;
    &:focus{
        border: solid 2px black;

    }
}
body {
}

  
`;

export default GlobalStyle;
