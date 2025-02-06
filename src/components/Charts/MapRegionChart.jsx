import Chart from "react-google-charts";

export default function MapRegionChart({ data }) {

  const options = {
    tooltip: { isHtml: true },
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
      data={data}
      options={options}
      height={"100%"}
      keepAspectRatio = {true}
    />
  );
}
