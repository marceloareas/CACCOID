import { createGlobalStyle } from 'styled-components';
import '@fontsource/bebas-neue';
import '@fontsource/roboto-mono';
import '@fontsource/roboto-condensed';

const GlobalStyles = createGlobalStyle`
:root {
    --dark-blue: #0C3561;
    --medium-blue: #185395;
    --light-blue: #05A0D4;
    --dark-red: #852221;
    --medium-green: #279666;
    --dark-grey: #383838;
    --light-grey: #6E6E6E;
    --lightest-grey: #E3E3E2;
    --medium-yellow: #FBE540;
    --white: #FFFFFF;
    --black: #000000;
    --off-white: #F1F1F1;
    --font-title: 'Bebas Neue', sans-serif;
    --font-accent: 'Roboto Mono', monospace;
    --font-regular: 'Roboto Condensed', sans-serif;
}

* {
    box-sizing: inherit;
}

html {
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto Condensed', sans-serif;
  background-color: var(--off-white);
  color: var(--black);
}`;

export default GlobalStyles;
