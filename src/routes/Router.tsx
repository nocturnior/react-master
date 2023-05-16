import { BrowserRouter, Route, Routes } from 'react-router-dom';

// components
import Coins from './Coins';
import Coin from './Coin';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Coins />}></Route>
        <Route path='/:coinId' element={<Coin />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
