import { useOutletContext } from "react-router-dom";

interface CharProps{
  coinId: string;
}

function Chart({coinId}: CharProps){
  console.log(coinId);
  return (
    <h1>Chart111111</h1>
  );
};

export default Chart;