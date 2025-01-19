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
import { formatDate } from "../../utils/formatDate";
import { _capitalize } from "chart.js/helpers";

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
export default function MultilinesChart({ labels, dataChart }) {
  const darkTheme = localStorage.getItem("theme") === "dark";
  const borderColors = [
    "rgba(77, 210, 240, 1)",
    "rgba(255, 168, 0, 1)",
    "rgba(177, 240, 77, 1)",
    "rgba(206, 77, 240, 1)",
    "rgba(241, 90, 96, 1)",
    "rgba(92, 195, 149, 1)",
  ];

  const backgroundColors = [
    "rgba(77, 210, 240, 0.2)",
    "rgba(255, 168, 0, 0.2)",
    "rgba(177, 240, 77, 0.2)",
    "rgba(206, 77, 240, 0.2)",
    "rgba(241, 90, 96, 0.2)",
    "rgba(92, 195, 149, 0.2)",
  ];

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: window.screen.availWidth <= 1000 ? "bottom" : "left",
        labels: {
          boxWidth: 40,
          boxHeight: 10,
        },
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
        grid: {
          display: false,
          drawTicks: false,
        },
        border: {
          dash: [2],
        },
      },
    },
  };

  const data = {
    labels: labels.map((label) => formatDate(label)),
    datasets: dataChart.map((item, index) => ({
      label: item.name,
      fill: true,
      data: item.data,
      borderColor: borderColors[index],
      tension: 0.3,
      backgroundColor: backgroundColors[index],
    })),
  };

  return <Line options={options} data={data} />;
}
