import React, { useContext, useEffect, useState } from "react";
import Chart from "./Chart";
import styled from "styled-components";
import { CurrentUserContext } from "../Context/CurrentUserContext";
import { usersData } from "./users_data";
const Data = () => {
  const { editUserInfo } = useContext(CurrentUserContext);
  const [chartData, setChartData] = useState({ datasets: [] });
  const [chartOptions, setChartOptions] = useState({});
  const readings = [];
  const names = [];
  usersData.userInfo.data.forEach((zone, pos) => {
    if (pos === 0) {
      return zone.zoneData.forEach((zDevices) => {
        if (zDevices.type === "temp-sensor") {
          readings.push(zDevices.sensorData[0].temp);
          names.push(zDevices.sensorId);
        }
      });
    }
  });
  console.log(readings);
  useEffect(() => {
    setChartData({
      labels: names,
      datasets: [
        {
          label: "Temperature Readings",
          data: readings,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    });
    setChartOptions({
      responsive: true,
      plugins: {
        Legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Greenhouse Readings",
        },
      },
    });
  }, []);

  return <Chart chartData={chartData} chartOptions={chartOptions} />;
};

export default Data;
