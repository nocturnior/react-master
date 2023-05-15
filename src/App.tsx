import styled from 'styled-components';
import React, { useState } from 'react';

// components
import Circle from './Circle';

function App() {
  const [value, setValue] = useState('');
  // event에 타입 추가하기
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value }, // string이어야만 한다
    } = e;
    setValue(value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('hello', value);
  };

  return (
    <Wrapper>
      <form onSubmit={onSubmit}>
        <input value={value} onChange={onChange} type='text' placeholder='username' />
        <button>로그인</button>
      </form>
    </Wrapper>

  );
}

// 스타일 컴포넌트
const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

export default App;
