import { createGlobalStyle } from "styled-components";
import variables from "./variables";

const GlobalStyle = createGlobalStyle`
${variables};

html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
}

*,
*::before,
*::after {
    box-sizing: inherit;
}

::webkit-scrollbar {
    display: none;
}
::webkit-scrollbar-track {
    display: none;
}

body {
    font-family: 'spartan', sans-serif;
    color: var(--white);
    background-color: var(--navy);
    background-repeat: no-repeat;
    background-position: center 10%;

    @media (max-width: 769px) {
        background-position: center 11%;
    }
    @media (max-width: 550px) {
        background-position: center 13.3%;
    }
}

h1 {
    font-family: 'Antonio', sans-serif;
    font-size: 80px;
    font-style: normal;
    font-weight: 400;
    font-size: 80px;
    line-height: 103px;
    text-transform: uppercase;
}
h2 {
    font-family: 'Antonio';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 52px;
    letter-spacing: -1.5px;
    text-transform: uppercase;
}
h3 {
    font-family: 'Spartan';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 25px;
    letter-spacing: 2.57143px;
    text-transform: uppercase;
}
h4 {
    font-family: 'Spartan';
    font-style: normal;
    font-weight: 700;
    font-size: 11px;
    line-height: 25px;
    letter-spacing: 1px;
    text-transform: uppercase;
}
p {
    font-family: 'Spartan';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 25px;
}
a {
    text-decoration: none;
}



`;

export default GlobalStyle;
