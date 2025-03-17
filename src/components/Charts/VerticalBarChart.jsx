import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function VerticalBarChart({ data, mode = "type1" }) {
  const darkTheme = localStorage.getItem("theme") === "dark";
  const labels = [
    "Jan",
    "Fer",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];
  const options = {
    responsive: true,
    maintainAspectRatio: false,
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
    },
    datalabels: {
      align: "top",
      color: "white",
      formatter: function (value, context) {
        return value;
      },
    },
    barPercentage: 1,
    borderRadius: 7,
    scales: {
      x: {
        ticks: {
          color: darkTheme ? "white" : "gray",
          font: { size: window.screen.availWidth <= 500 ? 7 : 12 },
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          color: "black",
          display: false,
          stepSize: 5,
        },
        position: "right",
        grid: {
          lineWidth: 0.5,
        },
      },
    },
  };
  const dataBars = {
    labels,
    datasets: [
      {
        label: "",
        data: data.data,
        backgroundColor:
          mode == "type1"
            ? ["#FF5B5A", "#58CEFF", "#4A52FF", "#00A28A", "#AB53DB"]
            : mode == "type2"
            ? ["#7A90A6"]
            : ["#ED686A"],
      },
    ],
  };
  return <Bar options={options} data={dataBars} plugins={[ChartDataLabels]} />;
}
