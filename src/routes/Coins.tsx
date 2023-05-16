import styled from 'styled-components';
import { coinsDB } from '../coinsDB';
import { Link } from 'react-router-dom';

export default function Coins() {
  return (
    <Contianer>
      <Header>
        <Title>:face 🪙oin</Title>
      </Header>
      <CoinsList>
        {coinsDB.map((coin) => (
          <Coin key={coin.id}>
            <Link to={`/${coin.id}`}>{coin.name} &rarr;</Link>
          </Coin>
        ))}
      </CoinsList>
    </Contianer>
  );
}

const Contianer = styled.div`
  padding: 0px 20px;
`;
const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
`;
const CoinsList = styled.ul`
  height: 80vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;
const Coin = styled.h1`
  min-width: 200px;
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  margin-bottom: 10px;
  border-radius: 15px;

  a {
    display: block;
    padding: 20px; // 버튼 전체 클릭 쌉가넝 ㅋ
    transition: color 0.15s ease-in-out;
  }

  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;
const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;
