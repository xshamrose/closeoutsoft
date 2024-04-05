import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";
import "./polar.css";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);
const providedData = {
  SD: "40%",
  MS: "30%",
  MIR: "20%",
  WIR: "30%",
};
const labels = Object.keys(providedData);
const dataPoints = Object.values(providedData).map((value) =>
  parseFloat(value)
);

// Adjust the data object for Chart.js
const chartData = {
  labels: labels,
  datasets: [
    {
      label: "",
      data: dataPoints,
      backgroundColor: [
        "#97AE4D",
        "rgba(255, 159, 64, 0.5)",
        "#8A5589",
        "#4E2B4B",
        "rgba(153, 102, 255, 0.5)",
        "rgba(255, 159, 64, 0.5)",
      ],
      borderWidth: 0,
    },
  ],
};
const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "right",
      fullWidth: false,
      boxWidth: 40,
      labels: {
        boxWidth: 10,
        useBorderRadius: true,
        borderRadius: 10 / 2,
      },
    },
  },
  scales: {
    r: {
      display: false,
    },
  },
};
export function PolarCharts() {
  return (
    <div className='polar-chart'>
      <PolarArea
        data={chartData}
        options={chartOptions}
        className='polar-inner'
      />
    </div>
  );
}
