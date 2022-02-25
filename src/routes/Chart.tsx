import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api.ts";
import ApexChart from "react-apexcharts";
import { noop } from "react-query/types/core/utils";

interface IHistorical{
  time_open: string;        // 오픈시간
  time_close: string;       // 마감시간
  open: number;             // 오픈가격
  high: number;             // 최고가격
  low: number;              // 최저가격
  close: number;            // 마감가격
  volume: number;
  market_cap: number;
}

interface CharProps{
  coinId: string;
  isDark: boolean;
}

function Chart({coinId, isDark}:CharProps){
  const {isLoading, data} = useQuery<IHistorical[]>(
    ["ohlcv", coinId],
    ()=> fetchCoinHistory(coinId),
    {
      refetchInterval: 10000,
    }  
  );
  return (
    <div>
      {isLoading ? (
        "Loading chart..."
        ) : (
          <ApexChart 
            type="line"
            series={[
              {
                name: "sales",
                data: data?.map(price => price.close),
              },
            ]}
            options={{
              theme:{
                mode:isDark?"dark":"light",
              },
              chart:{
                height:500,
                width:500,
                toolbar:{
                  show:false,
                },
                background: "transparent",
              },
              grid: {show: false},
              stroke: {
                curve: "smooth",
                width: 2,
              },
              yaxis:{
                axisBorder:{show:false},
                labels:{
                  show:false,
                },
              },
              xaxis:{
                axisBorder:{show:false},
                axisTicks:{show:false},
                labels:{
                  show:false,
                },
                type: "datetime",
                categories: data?.map((price) => price.time_close)
              },
              // 효과
              fill: {
                type: "gradient",
                gradient: {
                  gradientToColors: ["#0be881"],
                },
              },
              colors: ["#0fbcf9"],
              tooltip:{
                y:{
                  formatter: (value) => `$${value.toFixed(2)}`,
                }
              }
            }}
          />
        )
      }
    </div>
  );
};

export default Chart;