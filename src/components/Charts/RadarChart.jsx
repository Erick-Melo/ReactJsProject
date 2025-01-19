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
  console.log(data)
  const labels = data.labels;
  const borderColors = [
    "rgb(255, 165, 0)",
    "rgb(255, 255, 0)",
    "rgb(110, 255, 0)",
    "rgb(1, 255, 255)",
  ];
  const backgroundColors = [
    "rgb(255, 165, 0)",
    "rgba(255, 255, 0, 1)",
    "rgba(110, 255, 0, 1)",
    "rgba(1, 255, 255, 1)",
  ];
  const dataChart = {
    labels: labels,
    datasets: data.data.map((item, index) => ({
      label: item.label,
      data: item.data,
      backgroundColor: backgroundColors[index],
      borderColor: borderColors[index],
      pointRadius: 0,
      pointHoverRadius: 0,
      fill: -1,
    })),
  };
  const options = {
    responsive: false,
    maintainAspectRatio: false,
    barPercentage: 0.6,
    borderRadius: 3,
    tension: 0,
    layout: {
      padding: {
        top: 24,
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
          color: "white",
          font: {
            size: 12,
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "white",
          font: { size: window.screen.availWidth <= 500 ? 7 : 12 },
        },
      },
      y: {
        ticks: {
          color: "white",
          font: { size: window.screen.availWidth <= 500 ? 7 : 12 },
          stepSize: 5,
        },
        position: "right",
        grid: {
          color: "white",
          lineWidth: 0.5,
        },
      },
    },
  };
  return <Radar data={dataChart} options={options} />;
};
export default RadarChart;