import Chart from "react-google-charts";
import { defaultDataMap } from "../../constants/defaultDataMap";

export default function MapRegionChart({ data }) {

  const options = {
    region: "BR",
    resolution: "provinces",
    displayMode: "regions",
    colorAxis: { colors: ["#ffffff", "#56a1cd"] },
    backgroundColor: "transparent",
    datalessRegionColor: "transparent",
    defaultColor: "#f5f5f5",
    tooltip: {
      format: "currency",
      currencySymbol: "R$",
      decimalSymbol: ",",
      groupingSymbol: ".",
    },
  };

  return (
    <Chart
      chartType="GeoChart"
      width="100%"
      data={data}
      options={options}
    />
  );
}
