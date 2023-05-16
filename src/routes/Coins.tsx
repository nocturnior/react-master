import styled from 'styled-components';
import { coinsDB } from '../coinsDB';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

export default function Coins() {
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await fetch('https://api.coinpaprika.com/v1/coins');
      const json = await res.json();
      setCoins(json.slice(0, 100));
      setLoading(false);
    })();
  }, []);

  return (
    <Contianer>
      <Header>
        <Title>🤠 코인들ㅋ</Title>
      </Header>
      {loading ? (
        <Loader>로딩중❗</Loader>
      ) : (
        <CoinsList>
          {coins.map((coin) => (
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`}>
                <CoinImg src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Contianer>
  );
}

const Contianer = styled.div`
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
const CoinsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  gap: 12px;
  height: auto;
`;
const Coin = styled.h1`
  min-width: 140px;
  /* margin-bottom: 10px; */
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  border-radius: 15px;

  a {
    display: flex;
    align-items: center;
    margin-right: 5px;
    padding: 20px; // 버튼 전체 클릭 쌉가넝 ㅋ
    transition: color 0.15s ease-in-out;
  }

  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const CoinImg = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 6px;
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
