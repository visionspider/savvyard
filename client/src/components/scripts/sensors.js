const { fan } = require("./devices");
const { DateTime } = require("luxon");
//HERE WE FIND OUR TEMPERATURE / HUMIDITY / LIGHT / CARBON DIOXIDE / SOIL MOISTURE / SOIL pH / WIND SPEED / PRECIPITATION SENSORS

// TEMPERATURE SENSOR
//(expected values : Celsius (range: -20 ~ 50) and Farenheit (range 0 ~ 120))
//Greenhouse Temperature levels should be 26.6°C - 29.4°C / 80°F - 85°F
//Equations °F = (°C × 9/5) + 32 /°C = (°F − 32) x 5/9
//BACKEND WILL WORK WITH °C but conversion can easily be done on point of display

// "current_weather": {
//   "temperature": 7.4,
//   "weathercode": 61,
//   "windspeed": 12.5,
//   "time": "2022-04-07T17:00",
//   "winddirection": 113
// }

const tempSensor = (sensor, device, outdoorTemp) => {
  // console.log(
  //   "SENSOR = ",
  //   sensor.zoneName,
  //   "DEVICE = ",
  //   device,
  //   "OUTDOORTEMP = ",
  //   outdoorTemp
  // );
  const { min, max } = sensor;
  const { sunrise, sunset, currentWeather, timezone, currentTime, condition } =
    outdoorTemp;
  // const tempThreshold = [
  //   -30, -25, -20, -15, -10, -5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50,
  // ];
  //WEATHER API CURRENTLY UPDATES THIS TIME EVERY 20-30 MIN
  //currentTime is UNIX UTC // unix * 1000 = ms for ISO
  const dateFromWeatherApi = new Date(currentTime * 1000);

  //OPENWEATHER API BELOW
  // let weatherCode = 0;

  // weatherCodes.forEach((code, pos) => {
  //   if (code.toLowerCase().includes("sunny")) weatherCode = pos;
  // });
  //OPENWEATHER API ABOVE

  //IN MS
  // +DateTime.now().setZone(usersData.userInfo.location.timezone);

  //IN READABLE FORMAT
  // DateTime.now()
  //     .setZone(usersData.userInfo.location.timezone)
  //     .setLocale("en")
  //     .toLocaleString(DateTime.DATETIME_SHORT)
  // console.log(+DateTime.now().setZone(usersData.userInfo.location.timezone));
  const timezoneDate = DateTime.now().setZone(timezone);
  //GET START OF DAY timezoneDate needs to not be in MS
  // const dateString = timezoneDate.toLocaleString();
  // const timezoneDateDay = DateTime.fromFormat(`${dateString}`, "yyyy-MM-dd").ts;
  // console.log(timezoneDateDay);
  let tempChange = 0;
  // console.log(
  //   "CURRENT TIME = ",
  //   +timezoneDate,
  //   "SUNRISE = ",
  //   +sunrise,
  //   "SUNSET = ",
  //   +sunset
  // );

  //LOGIC for TEMPERATURE LOSS/GAIN per MINUTE
  // tempThreshold.forEach((threshold) => {
  let clearSky = -0.01;
  // if (Math.round(currentWeather) === threshold) {

  if (condition.toLowerCase().includes("sunny")) {
    clearSky = 0.01;
  }

  if (+timezoneDate > +sunrise && +timezoneDate < +sunset) {
    if (currentWeather < +min) {
      if (currentWeather < 0) {
        tempChange = -currentWeather * (clearSky * 2);
      } else {
        tempChange = currentWeather * (clearSky * 2);
      }
    } else if (currentWeather > +max) {
      tempChange = currentWeather * (clearSky * 5);
    }
  } else if (+timezoneDate > +sunrise && +timezoneDate > +sunset) {
    if (currentWeather < +min) {
      tempChange = -currentWeather * 0.02;
    } else if (currentWeather > +max) {
      tempChange = -currentWeather * 0.01;
    }
  }
  // }
  // });

  //TEMP CHANGE BASED ON HEATLOSS
  // console.log("TEMPCHANGE = ", tempChange);

  sensor.reading = +sensor.reading + tempChange;

  //LOGIC for FAN ACTIVATION AND FAN TEMP REGULATION

  if (
    sensor.reading > sensor.max &&
    device.listen === sensor.id &&
    device.type.toLowerCase().includes("cool")
  ) {
    device.switch = true;
    sensor.reading = +sensor.reading + fan(tempChange, device.type);
  } else if (
    sensor.reading < sensor.min &&
    device.listen === sensor.id &&
    device.type.toLowerCase().includes("heat")
  ) {
    device.switch = true;
    sensor.reading = +sensor.reading + fan(tempChange, device.type);
  } else if (device.listen === sensor.id) {
    device.switch = false;
  }
  // console.log(sensor.reading);
  let result = {
    data: {
      zoneName: sensor.zoneName,
      relation: sensor.relation,
      id: sensor.id,
      name: sensor.name,
      type: sensor.type,
      sensorData: [
        {
          timeStamp: +timezoneDate,
          unit: sensor.unit,
          reading: sensor.reading,
        },
      ],
    },
  };
  delete sensor.zoneName;
  result.devices = [{ ...sensor }, { ...device }];
  // console.log("RESULT = ", result);
  return result;
};
//HUMIDITY SENSOR
//(expected values : RH (Relative Humidity) (range: 0% ~ 100%) )
//Greenhouse Humidity levels should be 50%
//Relative Humidity = (density of water vapor / density of water vapor at saturation) x 100%

//LIGHT SENSOR (PAR (photosynthetically active radiation) range: 0 ~ 2500 µMol/m2s, ±5% )

//CARBON DIOXIDE SENSOR (range: 400 ~ 5000ppm)
//outside CO2 is 400ppm and greenhouses in extreme cases CO2 levels can go down to 175ppm
//concentration no higher than 1,000 to 1,200 ppm is recommended when ventilation is not occurring.
//For maximum benefits, CO2 enrichment should occur one hour after sunrise and end two to three hours before sunset.
//When supplemental lighting is used during the night, CO2 enrichment should also be used to maximize photosynthesis.

//SOIL MOISTURE SENSOR (range: 1 ~ 10)
//when low or high moisture controls the drip irrigation

// SOIL pH SENSOR (range:  3.5 ~ 8)
//

//WIND SPEED SENSOR (range: 0.6 ~ 50 m/s)

//PRECIPITATION SENSOR (range: 0 ~ 1)

//structure of data :
// const users = {
//   userId: {
//     name: "John",
//     data: [
//       {
//         timeStamp: {
//           temp: "number",
//           humidity: "number",
//         },
//       },
//     ],
//     zones: [
//       {
//         zoneId: {
//           sensors: {
//             id: {
//               sensorType: "temp-sensor",
//               min: "15",
//               max: "25",
//               controlTemp: {
//                 lowerTemp: "id",
//                 increaseTemp: "id",
//               },
//               id: {
//                 sensorType: "humidity-sensor",
//                 humidityMin: "30",
//                 humidityMax: "60",
//                 controlHumidity: {
//                   lowerHumidity: "id",
//                   increaseHumidity: "id",
//                 },
//               },
//             },
//             devices: {
//               id: {
//                 deviceType: "heat-fan",
//                 switch: "false",
//                 duty: "increaseTemp",
//                 listen: "id",
//               },
//               id: {
//                 deviceType: "cool-fan",
//                 switch: "false",
//                 duty: "lowerTemp",
//                 listen: "id",
//               },
//             },
//           },
//         },
//       },
//     ],
//   },
// };

//ENDPOINTS
// /users
// /:userId/zones
// /:userId/graph

module.exports = { tempSensor };
