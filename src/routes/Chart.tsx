import { useOutletContext, useParams } from "react-router-dom";

interface CharProps{
  coinId: string;
}

function Chart(){
  const coinId = useOutletContext<CharProps>();
  console.log(coinId);
  return <h1>Chart</h1>
};

export default Chart;