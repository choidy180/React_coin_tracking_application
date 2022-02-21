import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Coin from './routes/Coin.tsx';
import Coins from './routes/Coins.tsx';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* path마지막에 /*를 적어 명시적으로 neste route가 render될 수 있음을 표시 */}
        <Route path="/:coinId/*" element={<Coin />} />
        <Route path="/" element={<Coins />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;