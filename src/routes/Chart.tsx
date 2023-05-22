import { useQuery } from 'react-query';
import { useOutletContext } from 'react-router-dom';
import { fetchCoinHistory } from '../api';

interface ChartProps {
  coinId: string;
}

export const Chart = () => {
  // useOutletContext를 이용하여 프롭스 받아오기
  const { coinId } = useOutletContext<ChartProps>();
  const { isLoading, data } = useQuery(['ohlcv', coinId], () => fetchCoinHistory(coinId));

  return <>차트</>;
};
