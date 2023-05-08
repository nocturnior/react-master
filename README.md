# 💅 Styled Components

## 🥓 기본 사용법
```jsx
...
  <Baz bgColor='aliceblue' />
...


const Foo = styled.HTML태그`
  스타일1
`

// :luc_expand: 컴포넌트 확장 / 적용
const Bar = styled(Bar)`
  (스타일1) // 이미적용되어있는 스타일
  스타일2
`

cosnt Baz = styled.div`
  background-color: ${(props) => props.bgColor} // 스타일 상속 가넝
`
```

```jsx
import styled from 'styled-components';

function App() {
  return (
    <Wrapper>
      <Box bgColor='teal' />
      <Circle bgColor='crimson' />
    </Wrapper>
  );
}

// 스타일 컴포넌트
const Wrapper = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;

export default App;

```

### 🎩 'As' and Attrs
- [?] 컴포넌트의 **태그를 바꾸고**싶은데, **스타일은** 바꾸고 싶지 않을때?
👉 `<기존컴포넌트 as='HTML태그' />`
```
```jsx
import styled from 'styled-components';

function App() {
  return (
    <Wrapper>
      <Btn>로그인</Btn>
      {/* 스타일은 Btn이지만 태그는 a태그 */}
      <Btn as='a' href='/'>로그인</Btn>
    </Wrapper>
  );
}

// 스타일 컴포넌트
const Wrapper = styled.div`
  display: flex;
`;

const Btn = styled.*button*`
  color: white;
  background-color: cadetblue;
  border-radius: 15px;
`;

export default App;

```

### 🚛 컴포넌트내에서 HTML태그 속성을 설정하기!
```ad-tip
const Foo = styled.HtmlTag.attrs({ 속성:속성값 }) `
  style....
`
```

```jsx
import styled from 'styled-components';

function App() {
  return (
    <Wrapper as='header'>
      {/* input이 전부 required 하게 하고싶을땐? */}
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </Wrapper>
  );
}

// 스타일 컴포넌트
const Wrapper = styled.div`
  display: flex;
`;

const Input = styled.input.attrs({ required: true, minLength:10 })`
  background-color: cadetblue;
`;

export default App;

```

## 🎥 Animations

1. `import ..., {keyframes} from 'styled-components'`
2. ... keyframes로 선언
```jsx
import styled, **{ keyframes }** from 'styled-components';

function App() {
  return (
    <Wrapper>
      <Box />
    </Wrapper>
  );
}

// 스타일 컴포넌트
const Wrapper = styled.div`
  display: flex;
`;

const animation = **keyframes**`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  } 50% {
    transform: rotate(360deg);
    border-radius: 100px;
  } 100% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: cadetblue;
  animation: **${animation}** 1s linear infinite;
`;

export default App;
```

### 🕵️‍♀️ Selector
```jsx
import styled, { keyframes } from 'styled-components';

function App() {
  return (
    <Wrapper>
      <Box>
        <span>😀</span>
      </Box>
    </Wrapper>
  );
}

// 스타일 컴포넌트
...

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background-color: cadetblue;
  animation: ${animation} 1s linear infinite;

  span {
    font-size: 100px;
  }
`;

export default App;

```

