import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

interface RouteState {
  state: {
    name: string;
  };
}

export default function Coin() {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams();
  const { state } = useLocation() as RouteState;
  console.log(state.name);

  // const location = useLocation();
  // const coinName = location.state as RouteState;

  return (
    <Container>
      <Header>
        {/* state가 존재하면 name을 가져오고 아니면 로딩중~ 👉 코인으로 바로 들어가면 안보여짐 */}
        <Title>{state?.name || '로딩중❗'}</Title>
      </Header>
      {loading ? <Loader>로딩중❗</Loader> : null}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  padding: 0px 20px;
  margin: 0 auto;
`;
const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  height: 10vh;
  background: ${(props) => props.theme.bgColor} 0.7;
  backdrop-filter: blur(3px);
`;
const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: ${(props) => props.theme.accentColor};
`;
const Loader = styled.div`
  text-align: center;
  font-size: 30px;
`;
