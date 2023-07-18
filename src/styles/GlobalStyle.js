import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    :root{
        --border: 2px solid rgba(255, 255, 255, 0.5);
        --background: rgba(250, 177, 160, 0.7);
    }
    @font-face {
    font-family: 'Ramche';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-1@1.1/Ramche.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
    }
    * {
        font-family: 'Ramche', 'Courier New', Courier, monospace, sans-serif !important;
        font-size: 16px;
        button { border: 0; }
        select {
            -moz-appearance: none;
            -webkit-appearance: none;
            appearance: none;
            }
        a {
            color: inherit;
            text-decoration: none;
        }
    }
`;

export default GlobalStyle;
