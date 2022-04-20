import React, { useContext, useEffect, useState } from "react";
import Chart from "./Chart";
import { DateTime } from "luxon";
import fileSaver from "file-saver";
import styled from "styled-components";
import { CurrentUserContext } from "../Context/CurrentUserContext";
import _ from "lodash";
import Error from "../Error";
import Loading from "../Loading";
const Data = () => {
  const { editUserInfo, status } = useContext(CurrentUserContext);
  const [chartData, setChartData] = useState({ datasets: [] });
  const [chartOptions, setChartOptions] = useState({});
  const [sensorData, setSensorData] = useState([]);
  const [selectedSensor, setSelectedSensor] = useState(false);

  const selectZone = (ev) => {
    ev.preventDefault();
    //if ever a submit btn is added
    const zoneId = ev.target.value;
    zones.forEach((zone) => {
      if (zone.zoneId === zoneId) {
        setSensorData(zone.zoneData);
        setSelectedSensor([]);
      }
    });
  };
  const selectSensor = (ev) => {
    ev.preventDefault();
    //if ever a submit btn is added

    setSelectedSensor(ev.target.value);
  };

  const cloneUser = _.cloneDeep(editUserInfo);
  const readings = [];
  const type = [];
  const timeStamp = [];
  const zones = [];
  cloneUser.userInfo?.data.forEach((zone, pos) => {
    zones.push(zone);
    // if (pos === 0) {
    zone.zoneData.forEach((zDevices) => {
      if (zDevices.id === selectedSensor) {
        type.push(zDevices.type);
        zDevices.sensorData.forEach((sensorD) => {
          readings.push(sensorD.reading);
          timeStamp.push(
            DateTime.fromMillis(+sensorD.timeStamp)
              .setLocale("en")
              .toLocaleString(DateTime.TIME_SIMPLE)
          );
        });

        // names.push(zDevices.id);
      }
    });
    // }
  });
  // console.log(readings);
  // console.log(timeStamp);
  // console.log(zones);

  //IN MS
  // +DateTime.now().setZone(usersData.userInfo.location.timezone);

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
    setChartOptions(
      {
        //TRYING TO GET A TITLE FOR X AND Y AXIS BUT ITS NOT WORKING
        // options: {
        responsive: true,
        plugins: {
          Legend: {
            position: "top",
          },

          // scales: {

          // x: {
          //   type: "time",
          //   display: true,
          //   title: { display: true, text: "time" },
          // },
          // y: { display: true, title: { display: true, text: "Celsius" } },
          // },
        },
        title: {
          display: true,
          text: `Greenhouse Readings${type.length > 0 && " of " + type[0]}`,
        },
      }
      // }
    );
  }, [selectedSensor]);
  const saveFile = () => {
    const data = new Blob([JSON.stringify({ readings, timeStamp }, null, 2)], {
      type: "application/json",
    });
    //YOU CAN REPLACE BLOB WITH A FILE DESTINATION I.E
    //process.env.REACT_APP_CLIENT_URL + "/resources/data.text",
    fileSaver.saveAs(data, `data-${selectedSensor}.text`);
  };
  if (status.state === "loading") {
    return <Loading />;
  } else if (status.state === "error" || editUserInfo.userInfo === undefined) {
    return <Error />;
  } else if (status.state === "idle") {
    return (
      <Wrapper>
        <form
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            background: "transparent",
            gap: "20px",
          }}
        >
          <label
            htmlFor="zones"
            style={{
              height: "100%",
              display: "flex",
              alignSelf: "center",
            }}
          >
            Choose a Zone:
          </label>
          <select
            id="zones"
            name="zones"
            defaultValue={"none"}
            onChange={selectZone}
            style={{
              borderRadius: "20px",
              height: "100%",
              display: "flex",
              alignSelf: "center",
            }}
          >
            <option value="none" disabled hidden>
              Select an Option
            </option>
            {zones.map((zone) => (
              <option key={zone.zoneId} value={zone.zoneId}>
                {zone.zoneName}
              </option>
            ))}
          </select>
          <label
            htmlFor="sensors"
            style={{
              height: "100%",
              display: "flex",
              alignSelf: "center",
            }}
          >
            Choose a sensor:
          </label>
          <select
            id="sensors"
            name="sensors"
            defaultValue={"none"}
            onChange={selectSensor}
            style={{
              borderRadius: "20px",
              height: "100%",
              display: "flex",
              alignSelf: "center",
            }}
          >
            <option
              value="none"
              disabled={selectedSensor.length ? true : false}
              hidden={selectedSensor.length ? true : false}
            >
              Select an Option
            </option>
            {sensorData.map((sensor) => (
              <option key={sensor.id} value={sensor.id}>
                {sensor.name} - {sensor.type}
              </option>
            ))}
          </select>
          <DownloadBtn
            type="button"
            visible={selectedSensor.length ? true : false}
            onClick={saveFile}
          >
            Download File
          </DownloadBtn>
        </form>
        {selectedSensor && (
          <>
            <Chart chartData={chartData} chartOptions={chartOptions} />
          </>
        )}
      </Wrapper>
    );
  }
};
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  gap: 20px;
  margin: 1%;
  padding: 1%;
  border-radius: 20px;
  -webkit-box-shadow: 0px 0px 8px 0px lightgray;
  box-shadow: 0px 0px 8px 0px lightgray;
  background-color: lightgray;
`;
const DownloadBtn = styled.button`
  /* position: relative; */
  /* display: flex; */
  /* justify-content: center; */
  /* align-content: center; */
  /* flex-wrap: wrap; */
  // margin: 0 5% 5% 5%;
  padding: 0.5% 2%;
  width: auto;
  visibility: ${(p) => (p.visible ? "visible" : "hidden")};
`;
export default Data;
