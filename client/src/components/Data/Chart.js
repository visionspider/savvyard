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
import styled from "styled-components";
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
    <Wrapper>
      <ChartContainer>
        <Line data={chartData} options={chartOptions} />
      </ChartContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  /* align-self: center; */

  height: 75vh;
`;
const ChartContainer = styled.div`
  width: 60%;
`;
export default Chart;
