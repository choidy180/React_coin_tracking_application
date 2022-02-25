import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Coin from './routes/Coin.tsx';
import Coins from './routes/Coins.tsx';

interface IRouterProps{
  toggleDark: ()=> void;
  isDark:boolean;
}

function Router({toggleDark, isDark}: IRouterProps) {
  return (
    <BrowserRouter>
      <Routes>
        {/* path마지막에 /*를 적어 명시적으로 neste route가 render될 수 있음을 표시 */}
        <Route path="/:coinId/*" element={<Coin isDark={isDark}/>} />
        <Route path="/" element={<Coins toggleDark={toggleDark}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;