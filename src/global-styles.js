import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        --webkit-font-smoothing: antialiased;
        --mos--osx--font--smoothing: grayscale;
        background-color: black;
        color: #333333;
        font-size: 16px;
        -webkit-scrollbar: {
            width: 9px;
        };
        -webkit-scrollbar-thumb: {
            background-color: #333333;
        };
        -webkit-scrollbar-track: {
            background-color: #555555;
        }
    }
`;