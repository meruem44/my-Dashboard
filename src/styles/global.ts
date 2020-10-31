import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    button {
        cursor: pointer;
    }

    *, button, input, text-area {
        font-family: 'Ubuntu', sans-serif;
    }
`;