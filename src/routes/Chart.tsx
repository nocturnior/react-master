import { useQuery } from 'react-query';
import { useOutletContext } from 'react-router-dom';
import { fetchCoinHistory } from '../api';
import ApexChart from 'react-apexcharts';

interface ChartProps {
  coinId: string;
}

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

interface ToggleDarkType {
  toggleDark: () => void;
  isDark: boolean;
}

export const Chart = ({ isDark }: ToggleDarkType) => {
  // useOutletContext를 이용하여 프롭스 받아오기
  const { coinId } = useOutletContext<ChartProps>();
  const { isLoading, data } = useQuery<IHistorical[]>(['ohlcv', coinId], () =>
    fetchCoinHistory(coinId)
  );

  return (
    <>
      {isLoading ? (
        'loading,,,'
      ) : (
        <ApexChart
          type='line'
          series={[
            { name: 'sales', data: data ? data.map((hello) => hello.close) : [] },
            // { name: 'High', data: data ? data.map((price) => price.high) : [] },
          ]}
          options={{
            theme: { mode: 'dark' },
            chart: { width: 500, height: 400, toolbar: { show: false }, background: 'transparent' },
            grid: { show: false },
            stroke: { curve: 'smooth', width: 3 },
            xaxis: {
              categories: data?.map((date) => {
                const time = new Date(parseInt(date.time_close) * 1000);
                return time.toLocaleDateString();
              }),
              type: 'datetime',
              axisTicks: { show: false },
              axisBorder: { show: false },
              labels: { show: false },
            },
            yaxis: {
              show: false,
            },
            fill: {
              type: 'gradient',
              gradient: { type: 'horizontal', gradientToColors: ['#cdf'], stops: [0, 100] },
            },
            colors: ['#daf'],
            tooltip: {
              y: {
                formatter: (value) => `$${value.toFixed(2)}`,
              },
            },
          }}
        />
      )}
    </>
  );
};
