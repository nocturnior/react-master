import { useParams } from 'react-router-dom';

interface RouteParams {
  coinId: string;
}

export default function Coin() {
  const { coinId } = useParams();

  return <h1>코인ㅋ : {coinId}</h1>;
}
