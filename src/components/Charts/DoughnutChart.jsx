import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart({ data }) {
  const darkTheme = localStorage.getItem("theme") === "dark";
  const dataChart = {
    labels: data.labels.slice(0,5),
    datasets: [
      {
        data: data.data.slice(0,5),
        backgroundColor: ["#FF5B5A", "#58CEFF", "#4A52FF", "#00A28A", "#AB53DB"],
        borderColor: ["#555", "#555"],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    cutout: "65%",
    layout: {
      padding: 10
    },
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: true,
        position: "right",
        labels: {
          color: darkTheme ? "white" : "gray",
        }
      },
    },
  };
  return <Doughnut options={options} data={dataChart} />;
}
