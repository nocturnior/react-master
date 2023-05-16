import styled from 'styled-components';
import { Outlet } from 'react-router';
import React, { useState } from 'react';

// components
import Header from './components/Header';
import Router from './routes/Router';

function App() {
  return (
    <Wrapper>
      <Router />
    </Wrapper>
  );
}

// 스타일 컴포넌트
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

export default App;
