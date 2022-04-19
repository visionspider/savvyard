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
        <Line
          data={chartData}
          options={chartOptions}
          style={{
            background: "white",
            borderRadius: "20px",
            padding: "1%",
            width: "100%",
          }}
        />
      </ChartContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 20px;
  background: transparent;
  width: 100%;
  /* align-items: center; */
  /* align-self: center; */
`;
const ChartContainer = styled.div`
  width: 100%;

  background: transparent;
`;
export default Chart;
