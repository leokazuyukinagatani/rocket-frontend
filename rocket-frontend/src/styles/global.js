import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    color: ${({theme}) => theme.COLORS.WHITE};
    -webkit-font-smoothing: antialiased;
  }
  body::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;
  }

  body::-webkit-scrollbar-track {
    background-color: transparent;
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${({theme}) => theme.COLORS.PINK};
    border-radius: 20px;
  }

  body::-webkit-scrollbar-thumb:hover {
    transform: scale(1.5);
  }

  body, input, button, textarea {
    font-size: 20px;
    font-family: "Roboto Slab", serif;
    outline: none;

  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`;