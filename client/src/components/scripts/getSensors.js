import _ from "lodash";

const { tempSensor } = require("./sensors");

export const getSensors = (user, weather) => {
  //seperate sensor by type
  const tempSensorsArray = [];
  user.userInfo.zones.forEach((zone) =>
    zone.data.sensors.forEach((sensor) => {
      if (sensor.type === "temp-sensor") {
        sensor.zoneName = zone.data.zoneName;
        tempSensorsArray.push({ ...sensor });
      }
    })
  );

  //seperate devices by type
  const devicesArray = [];
  user.userInfo.zones.forEach((zone) =>
    zone.data.devices.forEach((device) => {
      if (device.type === "heat-fan") {
        devicesArray.push({ ...device });
      } else if (device.type === "cool-fan") {
        devicesArray.push({ ...device });
      }
    })
  );

  //USER LOCATION TIMEZONE
  const timezone = user.userInfo.location.timezone;
  //Breaking down necessary data from weather API
  const currentWeather = weather.main.temp;
  const currentTime = weather.dt;
  const sunrise = weather.sys.sunrise * 1000;
  const sunset = weather.sys.sunset * 1000;
  const condition = weather.weather[0].main;
  const outdoorTemp = {
    sunrise,
    sunset,
    currentWeather,
    currentTime,
    timezone,
    condition,
  };
  //sensor and outdoorTemp
  //LOGIC for TIME
  //RETURN ZONEID, SENSOR ID WITH NEW TEMPREADING TO MODIFY THE SENSOR
  //AND SEND BACK THE DEVICE THAT IS BEING ACTIVATED TO CHANGE TEMP RETURN ZONEID, DEVICEID, LISTEN(SENSORID) and SWITCH BOOLEAN VALUE
  // AND SAVE THE DATA FOR VISUALIZATION WE NEED (SENSORID,ZONEID, TIMESTAMP, TEMPREADING)
  const data = [];
  //Undefined zoneName is being created here...
  tempSensorsArray.forEach((sensor) =>
    devicesArray.forEach((device) => {
      if (sensor.relation === device.relation && sensor.id === device.listen)
        data.push(tempSensor(sensor, device, outdoorTemp));
    })
  );

  // 1 min = 60000

  return data;
};
