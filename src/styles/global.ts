import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
    scroll-behavior: smooth;
  }

  :focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['secondary-color']};
    border: 0;
    border-radius: 4px;
  };  

  body{
    background: ${(props) => props.theme.white};
    color: ${(props) => props.theme['gray-500']};
  }
  a{
    color: inherit;
    text-decoration: none;
  }
  
  ul{
    list-style: none;
  }

  @media (max-width: 520px){
    html{
      font-size: 87.5%;
    }
  }
`
