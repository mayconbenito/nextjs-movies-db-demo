import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        outline: none
    }

    body {
        background-color: #141414;
    }

    h1, h1, h3, h4, h5, h6, span, a, p {
        font-family: 'Roboto', sans-serif;
    }
`;
