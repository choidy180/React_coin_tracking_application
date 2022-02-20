import { createGlobalStyle } from "styled-components";
import Router from './Router.tsx'
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
    @font-face {
        font-family: 'Cafe24Ohsquareair';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2202@1.0/Cafe24Ohsquareair.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'NEXON Lv2 Gothic';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv2 Gothic.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    *{
        box-sizing: border-box;
    }
    body{
        font-family: 'NEXON Lv2 Gothic';
        background-color: ${(props) => props.theme.bgColor};
        color:  ${(props) => props.theme.textColor}
    }
    a{
        text-decoration: none;
        color: inherit;
    }
`;

function App() {
    return (
        <>
            <GlobalStyle/>
            <Router />
        </>
    )
}

export default App
