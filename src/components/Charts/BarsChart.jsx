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
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarsChart({ data }) {
  const darkTheme = localStorage.getItem("theme") === "dark";
  const labels = data.labels;

  let majorValue = Math.max(...data.data);

  const dataBars = {
    labels,
    datasets: [
      {
        label: "",
        data: data.data.map(() => majorValue),
        backgroundColor: "#dce4fe",
        borderWidth: 0,
        borderRadius: 10,
        borderSkipped: false,
        order: 2,
        customTooltip: false,
      },
      {
        label: "R$",
        data: data.data,
        backgroundColor: "#243677",
        borderWidth: 0,
        borderRadius: 10,
        borderSkipped: false,
        order: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    layout: {
      padding: 10,
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const dataset = context.dataset;
            if (dataset.customTooltip === false) {
              return null;
            }
            return `${context.dataset.label}: ${new Intl.NumberFormat("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(context.raw)}`;
          },
        },
      },
    },
    scales: {
      x: {
        border: {
          display: false,
        },
        grid: {
          display: false,
          drawTicks: false,
        },
        stacked: true,
        ticks: {
          color: darkTheme ? "white" : "gray",
        }
      },
      y: {
        grid: {
          display: false,
          drawOnChartArea: false,
          drawTicks: false,
        },
        ticks: {
          display: false,
        },
        beginAtZero: true,
      },
    },
  };

  return <Bar options={options} data={dataBars} />;
}
