import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Outlet, useOutletContext } from 'react-router-dom';
import React, { useState } from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';

// components
import Router from './routes/Router';
import { darkTheme, lightTheme } from './theme';

interface ToggleDarkType {
  toggleDark: () => void;
  isDark: boolean;
}

function App() {
  // 어플리케이션의 state에 기반하여 바꾸기 위해 theme을 index에서 App으로 가져옴
  const [isDark, setIsDark] = useState(true);

  // 현재 상태를 사용하고 싶을 때는 함수를 사용하는 것이 좋습니다. 함수를 사용하면 React는 이전 값을 거기에 넣습니다.
  // !isDark를 사용하면 isDark가 다른 곳에서 변경될 수 있기 때문에 버그가 발생할 수 있습니다.
  const toggleDark = () => {
    setIsDark((curr) => !curr);
  };

  const outletContext = useOutletContext<ToggleDarkType>();

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Wrapper>
          <Router toggleDark={toggleDark} isDark={isDark} />
          <Outlet />
          <ReactQueryDevtools initialIsOpen={true} />
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

// 스타일 컴포넌트
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

const GlobalStyle = createGlobalStyle`
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard-dynamic-subset.css");

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
*{
  box-sizing: border-box;
}
*::selection {
  background-color: ${(props) => props.theme.accentColor};
  color:#fff
}
body {
  line-height: 1;
  font-family: 'Pretendard', sans-serif;
  background-color: ${(props) => props.theme.bgColor};
  color:${(props) => props.theme.textColor}
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a{
  text-decoration: none;
  color:inherit;
}
`;

export default App;
