import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Coin from './routes/Coin.tsx';
import Coins from './routes/Coins.tsx';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:coinId" element={<Coin />} />
        <Route path="/" element={<Coins />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;