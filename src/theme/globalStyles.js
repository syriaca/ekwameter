import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}
 
  body {
    background-color: ${(props) => props.theme.colors.beige};
    color: ${(props) => props.theme.colors.grays.darkest};
    font-family: ${(props) => props.theme.fontFamily.sans};
    margin: 0 auto;
    padding: ${(props) => props.theme.spacing['10']};
    
    @media (min-width: ${(props) => props.theme.screens.md}) {
        width: 60vw;
    }    
  }

  button:hover {
    cursor: pointer;
  }

  figure {
    margin: 0;
  }
`;

export default GlobalStyle;