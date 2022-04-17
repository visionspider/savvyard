import React, { useContext, useEffect, useState } from "react";
import Chart from "./Chart";
import { DateTime } from "luxon";
import fileSaver from "file-saver";
import styled from "styled-components";
import { CurrentUserContext } from "../Context/CurrentUserContext";
import { usersData } from "./users_data";
const Data = () => {
  const { editUserInfo } = useContext(CurrentUserContext);
  const [chartData, setChartData] = useState({ datasets: [] });
  const [chartOptions, setChartOptions] = useState({});
  const [sensorData, setSensorData] = useState([]);
  const [selectedSensor, setSelectedSensor] = useState(false);

  const saveFile = () => {
    fileSaver.saveAs(
      process.env.REACT_APP_CLIENT_URL + "/resources/data.text",
      `data-${selectedSensor}.text`
    );
  };
  const selectZone = (ev) => {
    ev.preventDefault();
    //if ever a submit btn is added
    const zoneId = ev.target.value;
    zones.forEach((zone) => {
      if (zone.zoneId === zoneId) {
        setSensorData(zone.zoneData);
      }
    });
  };
  const selectSensor = (ev) => {
    ev.preventDefault();
    //if ever a submit btn is added

    setSelectedSensor(ev.target.value);
  };

  const readings = [];
  const type = [];
  const timeStamp = [];
  const zones = [];
  usersData.userInfo.data.forEach((zone, pos) => {
    zones.push(zone);
    if (pos === 0) {
      zone.zoneData.forEach((zDevices) => {
        if (zDevices.sensorId === selectedSensor) {
          type.push(zDevices.type);
          zDevices.sensorData.forEach((sensorD) => {
            readings.push(sensorD.reading);
            timeStamp.push(
              DateTime.fromMillis(+sensorD.timeStamp)
                .setLocale("en")
                .toLocaleString(DateTime.DATETIME_SHORT)
            );
          });

          // names.push(zDevices.sensorId);
        }
      });
    }
  });
  //IN MS
  // +DateTime.now().setZone(usersData.userInfo.location.timezone);

  //IN READABLE FORMAT
  // DateTime.now()
  //     .setZone(usersData.userInfo.location.timezone)
  //     .setLocale("en")
  //     .toLocaleString(DateTime.DATETIME_SHORT)
  // console.log(+DateTime.now().setZone(usersData.userInfo.location.timezone));
  console.log(readings);
  console.log(timeStamp);
  console.log(zones);
  useEffect(() => {
    setChartData({
      labels: timeStamp,
      datasets: [
        {
          label: selectedSensor,
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
          text: `Greenhouse Readings${type.length > 0 && " of " + type[0]}`,
        },
      },
    });
  }, [selectedSensor]);

  return (
    <>
      <form>
        <label htmlFor="zones">Choose a Zone:</label>
        <select
          id="zones"
          name="zones"
          defaultValue={"none"}
          onChange={selectZone}
        >
          <option value="none" disabled hidden>
            Select an Option
          </option>
          {zones.map((zone) => (
            <option key={zone.zoneId} value={zone.zoneId}>
              {zone.zoneId}
            </option>
          ))}
        </select>
        <label htmlFor="sensors">Choose a sensor:</label>
        <select
          id="sensors"
          name="sensors"
          defaultValue={"none"}
          onChange={selectSensor}
        >
          <option value="none" disabled hidden>
            Select an Option
          </option>
          {sensorData.map((sensor) => (
            <option key={sensor.sensorId} value={sensor.sensorId}>
              {sensor.sensorId} - {sensor.type}
            </option>
          ))}
        </select>
      </form>
      {selectedSensor && (
        <>
          <Chart chartData={chartData} chartOptions={chartOptions} />
          <div
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <button
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                margin: "0 5% 5% 5%",
              }}
              onClick={saveFile}
            >
              Download File
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Data;
