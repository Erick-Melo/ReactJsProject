import { useEffect, useState } from "react";
import SingleLineChart from "../../components/Charts/SingleLineChart";
import MainLayout from "../../layouts/MainLayout";
import { randomNumbersGenerator } from "../../utils/randomNumbersGenerator";
import ButtonSmall from "../../components/Buttons/ButtonSmall";
import BarsChart from "../../components/Charts/BarsChart";
import { VerticalBarChart } from "../../components/Charts/VerticalBarChart";
import DoughnutChart from "../../components/Charts/DoughnutChart";
import CardDashboard from "../../components/Cards/CardDashboard";
import CardChart from "../../components/Cards/CardChart";
import MapRegionChart from "../../components/Charts/MapRegionChart";
import { defaultDataMap } from "../../constants/defaultDataMap";
import { randomDecimalGenerator } from "../../utils/randomDecimalGenerator";
import RadarChart from "../../components/Charts/RadarChart";
import MixedBarsLinesChart from "../../components/Charts/MixedBarsLinesChart";

const Dashboard = () => {
  function createInitialData(key) {
    if (key !== "dataRadar") {
      const labels = Array.from({ length: 12 }, (_, i) => `Data ${i + 1}`);
      const data = Array(12).fill(0);
      return { labels, data };
    } else {
      const labels = Array.from({ length: 7 }, (_, i) => `Data ${i + 1}`);
      const data = Array(4).fill(Array(7).fill(0));
      return { labels, data };
    }
  }
  const [chartData, setChartData] = useState({
    dataLine: createInitialData("dataLine"),
    dataBar: createInitialData("dataBar"),
    dataBar2: createInitialData("dataBar2"),
    dataDoughnut: createInitialData("dataDoughnut"),
    dataRadar: createInitialData("dataRadar"),
    dataBarsMixed: createInitialData("dataBarsMixed"),
    dataLinesMixed: createInitialData("dataLinesMixed"),
  });
  const [mapRegion, setMapRegion] = useState(defaultDataMap);
  const randomizeData = (key) => {
    if (key !== "dataRadar") {
      setChartData((prevData) => ({
        ...prevData,
        [key]: {
          ...prevData[key],
          data: randomNumbersGenerator(1, 50, 12),
        },
      }));
    } else {
      setChartData((prevData) => ({
        ...prevData,
        [key]: {
          ...prevData[key],
          data: Array(4)
            .fill(null)
            .map(() => randomNumbersGenerator(1, 50, 7)),
        },
      }));
    }
  };
  const randomizeMapData = () => {
    const newData = [...defaultDataMap];
    for (let i = 1, len = newData.length; i < len; i++) {
      newData[i] = [newData[i][0], Number(randomDecimalGenerator())];
    }
    setMapRegion(newData);
  };
  useEffect(() => {
    randomizeData("dataLine");
    randomizeData("dataBar");
    randomizeData("dataBar2");
    randomizeData("dataDoughnut");
    randomizeData("dataRadar");
    randomizeData("dataBarsMixed");
    randomizeData("dataLinesMixed");
    randomizeMapData();
  }, []);

  return (
    <MainLayout page="Dashboard">
      <div className="flex flex-col gap-3 mt-3 px-2 sm:px-4 lg:px-6">
        <div className="grid sm:grid-cols-2 gap-3">
          <CardDashboard
            title={"Receita"}
            data={[
              { title: "Total", value: "R$ 1.000,00" },
              { title: "Vendas", value: "R$ 700,00" },
              { title: "Compras", value: "R$ 300,00" },
            ]}
          />
          <CardDashboard
            title={"Despesas"}
            data={[
              { title: "Aluguel", value: "R$ 2.000,00" },
              { title: "Funcionários", value: "R$ 17.700,00" },
              { title: "Manutenção", value: "R$ 3.500,00" },
            ]}
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          <CardChart title={"Vendas Mensais"}>
            <SingleLineChart data={chartData.dataLine} />
            <div className="absolute top-1 right-1">
              <ButtonSmall
                onclick={() => randomizeData("dataLine")}
                text="icon-refresh"
              />
            </div>
          </CardChart>
          <CardChart title={"Produção Mensal"}>
            <BarsChart data={chartData.dataBar} />
            <div className="absolute top-1 right-1">
              <ButtonSmall
                onclick={() => randomizeData("dataBar")}
                text="icon-refresh"
              />
            </div>
          </CardChart>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          <CardChart title={"Faturamento Mensal"}>
            <VerticalBarChart data={chartData.dataBar2} />
            <div className="absolute top-1 right-1">
              <ButtonSmall
                onclick={() => randomizeData("dataBar2")}
                text="icon-refresh"
              />
            </div>
          </CardChart>
          <CardChart title={"Faturamento por Tipo"}>
            <DoughnutChart data={chartData.dataDoughnut} />
            <div className="absolute top-1 right-1">
              <ButtonSmall
                onclick={() => randomizeData("dataDoughnut")}
                text="icon-refresh"
              />
            </div>
          </CardChart>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          <CardChart title={"Faturamento por Estado"} maxHeight={"h-[350px]"}>
            <MapRegionChart data={mapRegion} />
            <div className="absolute top-1 right-1">
              <ButtonSmall onclick={randomizeMapData} text="icon-refresh" />
            </div>
          </CardChart>

          <CardChart title={"Despesas por Categoria"} maxHeight={"h-[350px]"}>
            <RadarChart data={chartData.dataRadar} />
            <div className="absolute top-1 right-1">
              <ButtonSmall
                onclick={() => randomizeData("dataRadar")}
                text="icon-refresh"
              />
            </div>
          </CardChart>
        </div>
        <CardChart
          title={"Comparativo Faturamento x Meta"}
          maxHeight={"h-[350px]"}>
          <MixedBarsLinesChart
            dataBars={chartData.dataBarsMixed}
            dataLines={chartData.dataLinesMixed}
          />
          <div className="absolute top-1 right-1">
            <ButtonSmall
              onclick={() => {
                randomizeData("dataBarsMixed");
                randomizeData("dataLinesMixed");
              }}
              text="icon-refresh"
            />
          </div>
        </CardChart>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
