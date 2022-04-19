import _ from "lodash";
import { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CurrentUserContext } from "./Context/CurrentUserContext";
import Data from "./Data";
import GlobalStyle from "./GlobalStyles";
import Header from "./Header";
import Home from "./Home";
import useInterval from "./hooks/useInterval.hook";
import { getSensors } from "./scripts/getSensors";
import Weather from "./Weather";
import Welcome from "./Welcome";

const App = () => {
  const {
    edit,
    editUserInfo,
    setEditUserInfo,
    weather,
    sortEditUserInfoByPos,
    editSensorOrDevice,
    handleSubmit,
  } = useContext(CurrentUserContext);

  const sortData = (dataArr) => {
    const cloneUser = _.cloneDeep(editUserInfo);
    const cloneData = cloneUser.userInfo.data;
    // console.log("USER DATA = ", cloneData);
    // console.log("DATA ARRAY = ", dataArr);
    console.log(dataArr);
    console.log(cloneData);
    dataArr.forEach((data) =>
      [...cloneData].forEach((zone, pos) => {
        // console.log(cloneData.some((zone) => data.relation === zone.zoneId));
        if (
          zone.zoneId === data.relation &&
          typeof data.zoneName === "string"
        ) {
          zone.zoneData.forEach((sensor, pos2) => {
            if (sensor.id === data.id) {
              console.log(cloneData[pos].zoneData[pos2]);

              cloneData[pos].zoneData[pos2].sensorData.push(...data.sensorData);
            } else if (
              !cloneData[pos].zoneData.some(
                (sensor) => sensor.id === data.id
              ) &&
              data.id.includes("sensorId")
            ) {
              delete data.zoneName;
              console.log("INSIDE MAP AND CREATING NEW SENSOR DATA : ", data);
              cloneData[pos].zoneData.push(data);
            }
          });
        } else if (
          !cloneData.some((zone) => data.relation === zone.zoneId) &&
          data.relation.includes("zoneId") &&
          typeof data.zoneName === "string"
        ) {
          // console.log("I AM AN OUTSIDER");
          if (data.relation !== zone.zoneId) {
            console.log("BEFORE PUSHING = ", cloneData);
            cloneData.push({
              zoneId: data.relation,
              zoneName: data.zoneName,
              zoneData: [{ ...data }],
            });
            console.log("AFTER PUSHING = ", cloneData);
          }
        }
      })
    );

    return cloneData;
  };
  //INTERVAL

  useInterval(() => {
    if (!edit) {
      const cloneUser = _.cloneDeep(editUserInfo);
      const cloneWeather = _.cloneDeep(weather);
      const resultArr = getSensors(cloneUser, cloneWeather);
      const deviceArr = sortEditUserInfoByPos(editUserInfo);
      const dataArr = [];
      console.log(
        "BEFORE SORTING deviceArr = ",
        deviceArr,
        "BEFORE SORTING resultArr = ",
        resultArr
      );
      resultArr.forEach((data) => {
        data.devices.forEach((deviceData) =>
          [...deviceArr].forEach((devices, pos) =>
            devices.forEach((device, pos2) => {
              if (device.id === deviceData.id) {
                deviceArr[pos][pos2] = deviceData;
              }
            })
          )
        );
        dataArr.push(data.data);
      });

      const sortedData = sortData(dataArr);
      const sortedDevices = editSensorOrDevice(deviceArr);
      sortedDevices.userInfo.data = sortedData;
      const clone = _.cloneDeep(sortedDevices);
      console.log("THIS IS MY CLONE IN APP = ", clone);
      handleSubmit(false, clone);
    }
  }, 10000);

  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <>
          <Header />
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/weather">
            <Weather />
          </Route>
          <Route exact path="/data">
            <Data />
          </Route>
        </>
      </Switch>
    </Router>
  );
};

export default App;
