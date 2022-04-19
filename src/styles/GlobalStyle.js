import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
    --LighterBlack: #505D68;
    --LightBlack: #424B5A;
    --White: #FFFFFF;
    --Grey: #F2F5F7;
}

*{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
}

    html {
        font-size: 62.5%;
    }
    body {
        font-weight: 400;
        font-family: 'Roboto', sans-serif;
    }
    a {
        color: var(--LighterBlack);
        font-size: 1.4rem;
    }

    img {
        width: 100%;
    }
`;

export default GlobalStyle;
