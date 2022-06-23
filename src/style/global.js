import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        
    }

    button {
        cursor: pointer;
    }

    li {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    .Toastify__progress-bar-theme--light {
        background: var(--black);
    }

    .toastify-color-progress-error{
        background-color: #EDEDED;
    }

    :root{
        --black: #000;
        --white: #fff;
        --dark-red: #870505;
    }
`;
