import styled from 'styled-components';
import Circle from './Circle';

function App() {
  return (
    <Wrapper>
      <Circle borderColor='yellow' bgColor='teal' />
      <Circle bgColor='tomato' />
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
