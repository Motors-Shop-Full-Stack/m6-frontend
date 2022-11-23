import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        border: 0;
        box-sizing:border-box;
        vertical-align: baseline;
        font-size: 100%;
    }

    :root{
        --brand1: #4529e6;
        --brand2: #5126ea;
        --brand3: #b0a6f0;
        --brand4: #edeafd;

        --grey0: #0b0d0d;
        --grey1: #212529;
        --grey2: #495057;
        --grey3: #868e96;
        --grey4: #adb5bd;
        --grey5: #ced4da;
        --grey6: #dee2e6;
        --grey7: #e9ecef;
        --grey8: #f1f3f5;
        --grey9: #f8f9fa;
        --grey10: #fdfdfd;
        --whiteFixed: #ffffff;

        --alert1: #cd2b31;
        --alert2: #fdd8d8;
        --alert3: #ffe5e5;
        --sucess1: #18794e;
        --sucess2: #ccebd7;
        --sucess3: #ddf3e4;

        --random1: #e34d8c;
        --random2: #c04277;
        --random3: #7d2a4d;
        --random4: #7000ff;
        --random5: #6200e3;
        --random6: #36007d;
        --random7: #349974;
        --random8: #2a7d5f;
        --random9: #153d2e;
        --random10: #6100ff;
        --random11: #5700e3;
        --random12: #30007d;

        --inter: 'Inter', sans-serif;
        --lexend: 'Lexend', sans-serif;
    }

    body {
      background: var(--whiteFixed);
    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--grey3);
      border-radius: 3px;
    }
    }

    button {
        cursor: pointer;
    }

    ol, ul {
        list-style: none;
    }`;

export default GlobalStyle;
