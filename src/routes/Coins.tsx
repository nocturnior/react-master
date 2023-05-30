import styled from 'styled-components';
import { Link, useOutletContext } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchCoins } from './../api';
import { useQuery } from 'react-query';
import { Helmet } from 'react-helmet';
import { useSetRecoilState } from 'recoil';
import { isDarkAtom } from '../atoms';

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

export default function Coins() {
  /*
  const [coins, setCoins] = useState<ICoin[]>([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
    (async () => {
      const res = await fetch('https://api.coinpaprika.com/v1/coins');
      const json = await res.json();
      setCoins(json.slice(0, 130));
      setLoading(false);
    })();
  }, []); */
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  // Recoil atom의 value 수정
  const toggleDark = () => setDarkAtom((prev) => !prev);

  // reactQuery가 data를 caching하고 잇어서 화면을 바꿧다가 돌아와도 새로고침 안해두댐 ㅋ
  const { isLoading, data } = useQuery<ICoin[]>('allCoins', fetchCoins);

  return (
    <Contianer>
      <Helmet>
        <title>🤠코인들🤠</title>
      </Helmet>
      <Header>
        <Title>🤠코인들🤠</Title>
        <button onClick={toggleDark}>Toggle Mode</button>
      </Header>
      <CoinWrapper>
        {isLoading ? (
          <Loader>로딩중❗</Loader>
        ) : (
          <CoinsList>
            {data?.slice(0, 130).map((coin) => (
              <Coin key={coin.id}>
                <Link to={{ pathname: `/${coin.id}` }} state={{ name: coin.name }}>
                  <CoinImg
                    src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                  />
                  {coin.name} &rarr;
                </Link>
              </Coin>
            ))}
          </CoinsList>
        )}
      </CoinWrapper>
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
const CoinWrapper = styled.div`
  margin-top: 10px;
`;
const CoinsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  height: auto;
  gap: 12px;
  color: #45505c;
`;
const Coin = styled.h1`
  min-width: 140px;
  /* margin-bottom: 10px; */
  background-color: ${(props) => props.theme.linkColor};
  color: ${(props) => props.theme.textColor};
  border-radius: 15px;
  box-shadow: 0.5px 0.7px 0.8px rgba(0, 0, 0, 0.05), 4px 5px 6px rgba(0, 0, 0, 0.1);

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
