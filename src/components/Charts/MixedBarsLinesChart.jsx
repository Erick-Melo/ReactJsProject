import React, { useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  LineController,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar } from "react-chartjs-2";
// import { getCompleteMonthName } from "../../utils/getCompleteMonthName";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  LineController,
  PointElement,
  Title,
  Tooltip,
  Legend
);

export default function MixedBarsLinesChart({ dataBars, dataLines }) {

  const canvasRef = useRef(null);
  const darkTheme = localStorage.getItem("theme") === "dark";
  const getGradient = (ctx) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, 800);
    gradient.addColorStop(0, "rgba(76, 164, 79, 1)");
    gradient.addColorStop(1, "rgba(76, 164, 79, 0.25)");
    return gradient;
  };
  const labels = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const options = {
    responsive: true,
    layout: {
      padding: 10,
    },
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false,
      },
      datalabels: {
        display: false,
        align: "top",
        color: "white",
        font: { size: 8 },
      },
    },
    maintainAspectRatio: false,
    barPercentage: 0.9,
    borderRadius: 6,
    scales: {
      x: {
        ticks: {
          color: darkTheme ? "white" : "gray",
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          color: darkTheme ? "white" : "gray",
        },
        grid: {
          display: false,
          color: "#aaaaaa",
          lineWidth: 0.5,
        },
      },
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: "Faturamento",
        type: "bar",
        data: dataBars.data,
        order: 2,
        backgroundColor: (ctx) => {
          const chart = canvasRef.current;
          return chart ? getGradient(chart.ctx) : "#000";
        },
      },
      {
        label: "Meta",
        type: "line",
        data: dataLines.data,
        borderColor: "#FF00FF",
        backgroundColor: "#FF00FF",
        pointStyle: false,
        tension: 0.3,
        order: 1,
      },
    ],
  };

  return (
    <Bar
      options={options}
      data={data}
      plugins={[ChartDataLabels]}
      ref={canvasRef}
    />
  );
}
