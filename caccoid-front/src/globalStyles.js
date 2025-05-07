import { createGlobalStyle } from "styled-components";
import "@fontsource/bebas-neue"; 

const GlobalStyles = createGlobalStyle`
    :root {
        --dark-blue: #0C3561;
        --medium-blue: #185395;
        --light-blue: #05A0D4;
        --dark-red: #852221;
        --medium-green: #279666;
        --dark-grey: #383838;
        --light-grey: #6E6E6E;
        --medium-yellow: #FBE540;
        --white: #FFFFFF;
        --black: #000000;
        --off-white: #F1F1F1;
    }

    body {
        margin: 0;
        font-family: 'Bebas Neue', Arial, sans-serif;
    }
`;

export default GlobalStyles;
