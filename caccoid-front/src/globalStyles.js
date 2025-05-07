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
    --medium-yellow: #FBE540;
    --white: #FFFFFF;
    --black: #000000;
    --off-white: #F1F1F1;
    --font-title: 'Bebas Neue', sans-serif;
    --font-accent: 'Roboto Mono', monospace;
    --font-regular: 'Roboto Condensed', sans-serif;

    --sm: 576px;
    --md: 768px;
    --lg: 1024px;
}

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    display: flex;
    min-width: 320px;
    min-height: 100vh;
    font-family: var(--font-regular);
    background-color: var(--white);
    color: var(--black);
}

h1, h2 {
    font-family: var(--font-title);
    color: var(--dark-blue);
}

h3, h4, h5, h6 {
    font-family: var(--font-accent);
}

a {
    color: inherit;
    text-decoration: none;
    outline: none;
}

button {
    font-family: inherit;
    cursor: pointer;
}

@media (max-width: var(--lg)) {
    body {
        font-size: 15px;
    }
    .some-container {
        width: 90%;
    }
}

@media (max-width: var(--md)) {
    body {
    font-size: 14px;
    }

    h1, h2 {
    font-size: 1.8rem;
    }

    .some-container {
    width: 100%;
    }
}

@media (max-width: var(--sm)) {
    body {
    font-size: 13px;
    }

    h1, h2 {
    font-size: 1.5rem;
    }

    .some-container {
    padding: 10px;
    }
}
`;

export default GlobalStyles;
