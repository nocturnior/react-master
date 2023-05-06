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
