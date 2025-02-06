import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend
);
const RadarChart = ({ data }) => {
  const darkTheme = localStorage.getItem("theme") === "dark";
  const labels = data.labels;
  const borderColors = [
    "rgb(255, 165, 0)",
    "rgb(255, 255, 0)",
    "rgb(110, 255, 0)",
    "rgb(1, 255, 255)",
  ];
  const backgroundColors = [
    "rgb(255, 165, 0, .3)",
    "rgba(255, 255, 0, .3)",
    "rgba(110, 255, 0, .3)",
    "rgba(1, 255, 255, .3)",
  ];
  const dataChart = {
    labels: labels,
    datasets: data.data.map((item, index) => ({
      label: data.labels[index],
      data: item,
      backgroundColor: backgroundColors[index],
      borderColor: borderColors[index],
      pointRadius: 0,
      pointHoverRadius: 0,
      fill: true,
    })),
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    barPercentage: 1,
    borderRadius: 3,
    tension: 0,
    layout: {
      padding: 10,
    },
    elements: {
      line: {
        borderWidth: 2,
      },
    },
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: true,
        position: "bottom",
        labels: {
          color: darkTheme ? "white" : "gray",
          font: {
            size: 12,
          },
        },
      },
      labels: {
        display: false
      }
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
      r: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
        angleLines: {
          color: darkTheme ? "white" : "gray",
          lineWidth: 0.5,
        },
      },
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
  };
  return (
    <Radar data={dataChart} options={options} plugins={[ChartDataLabels]} />
  );
};
export default RadarChart;
