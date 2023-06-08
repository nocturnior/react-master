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
    
    &:hover {
      font-size: 100px;
    }

    &:active {
      opacity: 0;
    }
  }
`;

export default App;
```

태그명에 의존하고 싶지않다면? 
```jsx
function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji as='p'>😀</Emoji>
      </Box>
    </Wrapper>
  );
}

...

const Emoji = styled.span`
  font-size: 70px;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background-color: cadetblue;
  animation: ${animation} 1s linear infinite;
  
  ${Emoji} {
    &:hover {
      font-size: 100px;
    }
  }
`;
```

## 🌐 Themes

> Dark Mode vs. Light Mode

```ad-hint
Theme : 기본적으로 모든 색상들을 가지고 있는 object -> 모든 색들을 하나의 object안에 넣어놈
```

```jsx
// index.js

...
import { ThemeProvider } from 'styled-components';

...

const darkTheme = {
  textColor: 'whiteSmoke',
  backgroundColor: 'hsl(218, 23%, 21%)',
};

const lightTheme = {
  textColor: 'hsl(218, 23%, 21%)',
  backgroundColor: 'whiteSmoke',
};

root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

```

`ThemeProvider > App` : 컴포넌트들이 색에 접근 가능하도록 함

# 🌶️ TypeScript

➕ 기존에 있는 플젝에 TS 추가
```shell
yarn add typescript @types/node @types/react @types/react-dom @types/jest
```

💅 Style-Components 추가
```shell
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```
`@types/styled-components` : @types :obs_right_arrow_with_tail: TypeDefinition(자바스크립트 패키지를 타입스크립트에게 설명)

## ⌨️ Typing the Props

### 🤯 Ts에 React Components 설명하기
- ["] component에게 type을 준다
1. props를 interface를 사용하여 보호
```tsx
interface PlayerShape {
  name: string;
  age: number;
}

const sayHello = (playerObj: PlayerShape) => {
  `Hello ${playerObj.name}! ur ${playerObj.age}`;
};

```

```tsx
interface ContianerProps {
  bgColor: string;
}

interface CircleProps {
  bgColor: string;
}
```

### ⚙️ Optional Props
```tsx
import styled from 'styled-components';

interface ContianerProps {
  bgColor: string;
  borderColor: string;
}

interface CircleProps {
  bgColor: string;
  borderColor?: string; // 옵션으로 넣어줌
}

const Circle = ({ bgColor, borderColor }: CircleProps) => {
  // borderColor가 있을때랑 없을때
  return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} />;
};

// style components
const Container = styled.div<ContianerProps>`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  background-color: ${(props) => props.bgColor};
  
  // 컨테이너 컴포넌트에는 필수!
  border: 1px solid ${(props) => props.borderColor};
`;

export default Circle;
```

- [*] default Value
```tsx
// App.tsx
...
function App() {
  return (
    <div>
      <Circle bgColor='cadetblue' borderColor='yellow' />
      <Circle bgColor='crimson' text='잘되나?' />
    </div>
  );
}

// Circle.tsx
interface CircleProps {
  bgColor: string;
  borderColor?: string; // 옵션으로 넣어줌
  text?:string;
}

const Circle = ({ bgColor, borderColor, text = 'Default Text' }: CircleProps) => {
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
};
```

# 🔗 React-Router-Dom
<details>
  <summary>INDEX</summary>
:obs_right_arrow_with_tail: `BrowserRouter`  
:obs_right_arrow_with_tail: `createBrowserRouter`
</details>

## 🎐 BrowserRouter
```tsx
// Router.tsx
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Header';
import Home from './screens/Home';
import About from './screens/About';

function Router() {
  return <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
    </Routes>
  </BrowserRouter>;
}

export default Router
```

```tsx
// Header.tsx
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header
```

```tsx
// App.tsx
import styled from 'styled-components';
import React, { useState } from 'react';

// components
import Header from './components/Header';
import Router from './Router';

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
      <Router />
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
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

export default App;
```

## 🎨 createBrowserRouter
:obs_right_arrow_with_tail: 브라우저를 좀 더 선언적으로 변경해줌

```tsx
// Root.tsx
import { Outlet } from 'react-router';

function Root() {
  return (
    <Wrapper>
      <Outlet /> // Root의 자식들을 render하고싶다고 Outlet으로 말해줘야함
    </Wrapper>
  );
}
...
```

```tsx
// Router.tsx
import { createBrowserRouter } from 'react-router-dom';

...

// array 형식으로
const router = createBrowserRouter([
  {
    // 전체 route들의 컨테이너
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);
```

## 🔍 useSearchParams
- ["] `useSearchParams` : 현재 위치에 대한 URL의 쿼리 문자열을 읽고 수정하는 데 사용
→ 현재 위치의 search params와 이를 업데이트하는 데 사용할 수 있는 함수라는 두 가지 값의 배열을 반환
→ 탐색과 같이 작동하지만 **URL의 검색 부분에 대해서만 작동**

```tsx
import { Link, useSearchParams } from 'react-router-dom';
import { users } from '../db';

function Home() {
  const [readSearchParams, setSearchParams] = useSearchParams();
  console.log('🚀 ⁝ Home ⁝ readSearchParams:', readSearchParams);
  // URLSearchParams : JS메소드~ useSearchParams를 사용하려면 JS메소드인 URL웅애웅이랑 같이써야한다

  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;

```

# :luc_bitcoin: CoinTracker

```ad-note
- ["] Home.tsx : All coins
```

## ⏪ BehindTheScene

> 보이지 않는 방식으로 데이터를 보내는것 (`state`사용하기)

* 데이터 보내는것 : parameter를 이용해 URL에게 코인에 대한 정보를 넘기는것! 👉 이런 방식으로 한 화면에서 다른 화면으로 정보를 받아올 수도 있음!
![[Pasted image 20230517015908.png]]

## 🕯 useMatch() :obs_right_arrow_with_tail: React-Master #5.8

> 현재 위치를 기준으로 지정된 경로에 대한 일치 데이터를 반환
```tsx
// Coin.tsx
...
<Tabs>
  <Tab isActive={chartMatch !== null}>
    {/* Nested구조여서 굳이 onClick을 할 필요가 없다! */}
    {/* ➡ URL만 바꿔주면 됨(<Link to=''> */}
    <Link to='chart'>Chart</Link>
  </Tab>
  <Tab isActive={priceMatch !== null}>
    <Link to='price'>Price</Link>
  </Tab>
</Tabs>
<Outlet />
...
```

# 💮 React Query
> - React 애플리케이션에서 서버 state를 fetching, caching, synchronizing, updating할 수 있도록 도와주는 라이브러리.
> - "global state"를 건드리지 않고 React 및 React Native 애플리케이션에서 데이터를 가져오고, 캐시하고, 업데이트합니다.
> - 스스로 실행하고 있던 로직들을 축약
> - ==useQuery + fetch function = 모든 state와 fetch 대체==
> - reactQuery가 data를 caching하고 잇어서 화면을 바꿧다가 돌아와도 새로고침 안해두댐 ㅋ

```shell
yarn add @tanstack/react-query
```

## 🐲 해야할일
### 1. `queryClient` 만들기
```tsx
const queryClient = new QueryClient()
```

### 2. provider만들기 => 쿼리클라이언트에 잇는 모든곳에 접근가능
  ```tsx 
...
  <QueryClientProvider client={queryClient}>
    <.../>
  <QueryClientProvider />
...
  ```

### 3. fetcher 함수 만들기
```ad-tip
01. API와 관련된것들은 component들과 멀리 떨어져 있게! 👉 component들이 fetch하지 않게하기위해
02. json 데이터의 promise return 무족권
```

```tsx
// api.ts
export function fetchCoins() {
  return fetch('https://api.coinpaprika.com/v1/coins').then((res) => res.json);
}
```

### 4. useQuery 이용해보기
`useQuery`는 `fetcher 함수`를 불러오고, fetcher 함수가 `isLoading`이라면 `true`라고 알려줌. 물론 끝나면 false다.
<u>또한 api로부터 불러온 데이터들은 data에 저장된다.</u>
```tsx
const { isLoading, data } = useQuery<ICoin[]>('allCoins', fetchCoins);
```

![[Pasted image 20230518230411.png]]![[Pasted image 20230518230421.png ]]

## 🧰 ReactQueryDevtools

> DevTools : 캐시에 있는 쿼리를 볼 수 있따!

```tsx
// reactQuery가 data를 caching하고 잇어서 화면을 바꿧다가 돌아와도 새로고침 안해두댐 ㅋ  
`const { isLoading, data } = useQuery<ICoin[]>('allCoins', fetchCoins);`
...
```

```ad-example
BTC 선택후 뒤로가기 👉 다시 BTC 선택시 `loading` 안보이게 : React query가 캐시에서 가져온 data줄거얌
```


# 🧲 Recoil
> 상태관리 라이브러리 중 하나  > 프롭스드릴링 방지

## ⚛️ Atom : 아톰은 독립적

> Atom은 상태(state)의 일부를 나타낸다. Atoms는 어떤 컴포넌트에서나 읽고 쓸 수 있다.
> atom의 값을 읽는 컴포넌트들은 암묵적으로 atom을 구독한다.

> 그래서 atom에 **어떤 변화**가 있으면 그 ==atom을 구독하는 모든 컴포넌트들이 리렌더링 되는 결과가 발생==할 것이다. 

아톰을 **관찰** 또는 **수정** 가능

#### `atom()`: 쓰기 가능한 state를 나타내는 atom를 만듭니다.

```tsx
const textState = atom({
  key: 'textState', // 유니크한 ID(다른 atom/selector와 관련하여)
  default: '', // 기본값 (초기값)
});
```
![[Pasted image 20230530182555.png]]
![[Pasted image 20230530215620.png]]

#### `useRecoilState()`
컴포넌트가 atom을 읽고 쓰게 하기 위해서는 useRecoilState()를 아래와 같이 사용하면 된다.
ex) const [text, setText] = useRecoilState(textState);

---
### 🎛️ 컴포넌트를 atom의 value로 연결해보기

#### `useRecoilValue(state)`
* Recoil **state값을** 반환!
* 읽기 전용 상태와 쓰기 가능 상태에서 모두 동작하므로 **컴포넌트가 상태를 읽을 수만 있게 하고 싶을 때**에 추천하는 hook!
* React 컴포넌트에서 사용하면 상태가 업데이트 될 때 리렌더링을 하도록 컴포넌트를 구독
```tsx
const names = useRecoilValue(namesState);
const isDark = useRecoilValue(isDarkAtom);
```


### 📝 atom 의 value 수정해보기

#### `useSetRecoilState(state 혹은 atom)`
* Recoil state의 값을 업데이트하기 위한 **setter 함수를 반환**합니다.
* 상태를 변경하기 위해 비동기로 사용될 수 있는 setter 함수를 리턴
* setter는 새로운 값이나 이전 값을 인수로 받는 updater 함수를 넘겨줌.
* ==(= 매개변수로 atom을 받고, atom을 변경하는 함수를 반환)==
```tsx
// Recoil atom의 value 수정
const toggleDark = () => setDarkAtom((prev) => !prev);
const [text, setText] = useRecoilState(textState);
```

# 🪝 React-Hook-Form
> 사용하기 쉬운 유효성 검사를 통해 성능이 뛰어나고 유연하며 확장 가능한 form입니다
```ad-note
React Hook Form은 TypeScript로 빌드되었으며, FormData 유형을 정의하여 form 값을 지원할 수 있습니다.
```

```tsx
type FormData = {
firstName: string;
lastName: string;
};

const { register, setValue, handleSubmit, formState: { errors } } = useForm< FormData >();
```

`defaultValues: Record< string, any > = {}`
input에 대한 defaultValues는 사용자가 component와 상호 작용하기 전에 component가 처음 렌더링될 때 초기 값으로 사용됩니다.
모든 input에 대한 defaultValues를 빈 문자열이나 null과 같은 정의되지 않은 값으로 설정하는 것이 좋습니다.

## :obs_install: install
```bash
yarn add react-hook-form
```

```jsx
import { useForm } from 'react-hook-form';
```

## :luc_function_square: useForm의 method : `Register` 
* **input을 등록**하거나 **element를 선택**하고 **유효성 검사 규칙을 React Hook Form에 적용**할 수 있습니다. 
* 유효성 검사 규칙은 모두 HTML 표준을 기반으로 하며 사용자 지정 유효성 검사 방법도 허용합니다.

```tsx
const { register } = useForm();

register: (name: string, RegisterOptions?) => ({ onChange, onBlur, name, ref })
```

onBlur →  form의 바깥쪽 클릭했을때!

## :luc_function_square: useForm의 method : `Watch` 
* input의 변화를 구독합니다.
* 이 메서드는 지정된 input을 감시하고 해당 값을 반환합니다. input 값을 렌더링하고 조건에 따라 무엇을 렌더링할지 결정하는 데 유용합니다.

```tsx
watch: (names?: string | string[] | (data, options) => void) => unknown
```

```ad-example
```
``` tsx
export default function TodoList() {
  const { register, watch } = useForm();
  console.log('🚀 ⁝ TodoList ⁝ watch:', watch());

  return (
    <>
      <form style={{display:'flex', flexDirection:'column'}}>
        <input {...register('email')} placeholder='이메일' />
        <input {...register('firstName')} placeholder='성' />
        <input {...register('lastName')} placeholder='이름' />
        <input {...register('userName')} placeholder='닉네임' />
        <input {...register('password')} placeholder='비밀번호' />
        <input {...register('passwordConfirm')} placeholder='비밀번호 확인' />
        <button>추가</button>
      </form>
    </>
  );
}
```

![[Pasted image 20230606170058.png]]

## :luc_function_square: useForm의 method : `handleSubmit`
* 이 함수는 form 유효성 검사가 성공하면 form 데이터를 받습니다.
```tsx
// handleSubmit: ((data: Object, e?: Event) => void, (errors: Object, e?: Event) => void) => Function

const { register, handleSubmit } = useForm();
const onSubmit: SubmitHandler = data => console.log(data);

form onSubmit={handleSubmit(onSubmit)}
```

### :luc_regex: 정규표현식
[Regex](https://www.regexpal.com), [Regex101](https://regex101.com/)
```ad-example
/^[A-Za-z0-9._%+-]+@naver.com$/
/^[A-Za-z0-9._%+-]+@naver.com/g
```
`^` → 문장의 시작
`+`  → 하나 또는 하나이상

## :luc_function_square: useForm의 method : `setError`
* 이 함수를 사용하면 하나 이상의 오류를 수동으로 설정할 수 있습니다. (수동으로 input 오류 설정)
```tsx
// setError:(name: string, error: FieldError, { shouldFocus?: boolean }) => void

  const onValid = (data: IFormData) => {
    if (data.password !== data.passwordConfirm) {
      setError(
        'passwordConfirm',
        { message: '패스워드가 일치하지 않습니다.' },
        { shouldFocus: true }
      );
    }
    // setError('extraErr', { message: '서버가 오프라인 상태입니다.' });
  };```

### shouldFocus?: boolean
* 오류를 설정하는 동안 input에 focus을 맞춰야 합니다.
* input이 비활성화되면 shouldFocus가 작동하지 않습니다
* 
## :luc_function_square: useForm의 method : `clearErrors`
* 이 함수는 form의 오류 메세지를 수동으로 지울 수 있습니다.
* setError()로 설정한 메세지를 삭제할 수 있습니다.
```tsx
clearErrors('username');
onClick={() => clearErrors(["firstName", "lastName"])}
```

### validate
`validate : { (value) => !value.includes("nico") || "error message"}`
공식 문서에는 위와 같이 설명하고 있습니다.
```tsx
        <input
          {...register('firstName', {
            required: '쓰슈',
            validate: (value) => !value.includes('test') || '허용되지 않은 성입니다.',
          })}
          placeholder='성'
        />
```
