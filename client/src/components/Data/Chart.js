import React from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
//make lines thick, more vivid, titles bigger
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);
const Chart = ({ chartData, chartOptions }) => {
  return (
    <div>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};
export default Chart;
