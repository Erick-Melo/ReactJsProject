import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
export default function SingleLineChart({ data }) {
  const darkTheme = localStorage.getItem("theme") === "dark";
  const labels = data.labels;

  const options = {
    maintainAspectRatio: false,
    layout: {
      padding: 10,
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      interaction: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        ticks: {
          color: darkTheme ? "white" : "gray",
        },
        grid: {
          display: false,
          drawTicks: false,
        },
        border: {
          dash: [2],
        },
      },
      y: {
        border: {
          dash: [2],
        },
        grid: {
          display: false,
          drawTicks: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  };

  const dataChart = {
    labels: labels,
    datasets: [
      {
        label: "Sample",
        fill: false,
        data: data.data,
        borderColor: "rgba(0, 175, 140, 1)",
        tension: 0.3,
        backgroundColor: "rgba(0, 175, 140, 0.2)",
      },
    ],
  };

  return <Line options={options} data={dataChart} />;
}
