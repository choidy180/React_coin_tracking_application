import { createGlobalStyle } from "styled-components";
import Router from './Router.tsx'
import reset from "styled-reset";
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme.ts';
import { useState } from "react";

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
    const [isDark, setIsDark] = useState(false);
    const toggleDark=()=>setIsDark(current => !current);
    return (
        <>
          <ThemeProvider theme={isDark ? darkTheme :lightTheme}>
            <GlobalStyle/>
            <Router isDark={isDark} toggleDark={toggleDark}/>
            <ReactQueryDevtools initialIsOpen={true}/>
          </ThemeProvider>
        </>
    )
}

// App (isDark, modifierFn)

//  -> Router -> Coins(modierFn)
export default App
