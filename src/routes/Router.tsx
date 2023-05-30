import { BrowserRouter, Route, Routes } from 'react-router-dom';

// components
import Coins from './Coins';
import Coin from './Coin';
import { Chart } from './Chart';
import { Price } from './Price';

interface RouterProps {
  toggleDark: () => void;
  isDark: boolean;
}

export default function Router({ toggleDark, isDark }: RouterProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Coins toggleDark={toggleDark} isDark={isDark} />} />
        <Route path='/:coinId' element={<Coin toggleDark={toggleDark} isDark={isDark} />}>
          <Route path='chart' element={<Chart toggleDark={toggleDark} isDark={isDark} />} />
          <Route path='price' element={<Price toggleDark={toggleDark} isDark={isDark} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
