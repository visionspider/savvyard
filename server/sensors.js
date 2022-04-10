const { fan } = require("./devices");

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
  const { tempMin, tempMax } = sensor;
  const { sunrise, sunset, currentWeather, currentTime, condition } =
    outdoorTemp;
  const tempThreshold = [
    -30, -25, -20, -15, -10, -5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50,
  ];
  //currentTime is UNIX UTC // unix * 1000 = ms for ISO
  const date = new Date(currentTime * 1000);
  let tempChange = 0;
  // let weatherCode = 0;

  // weatherCodes.forEach((code, pos) => {
  //   if (code.toLowerCase().includes("sunny")) weatherCode = pos;
  // });

  //LOGIC for TEMPERATURE LOSS/GAIN per MINUTE
  tempThreshold.forEach((threshold) => {
    let clearSky = -0.01;
    if (Math.round(currentWeather) === threshold) {
      if (condition.toLowerCase().includes("sunny")) {
        clearSky = 0.01;
      }
      if (+date > +sunrise && +date < +sunset) {
        if (threshold < tempMin) {
          if (threshold < 0) {
            tempChange = -threshold * (clearSky * 2);
          } else {
            tempChange = threshold * (clearSky * 2);
          }
        } else if (threshold > tempMax) {
          tempChange = threshold * (clearSky * 5);
        }
      } else if (+date < +sunrise && +date > +sunset) {
        if (threshold < tempMin) {
          tempChange = threshold * 0.02;
        } else if (threshold > tempMax) {
          tempChange = threshold * 0.01;
        }
      }
    }
  });

  //LOGIC for FAN ACTIVATION
  sensor.tempReading += tempChange;

  if (
    sensor.tempReading > sensor.tempMax &&
    device.listen === sensor.sensorId
  ) {
    device.switch = true;
    sensor.tempReading += fan(tempChange);
  } else if (
    sensor.tempReading < sensor.tempMin &&
    device.listen === sensor.sensorId
  ) {
    device.switch = true;
    sensor.tempReading += fan(tempChange);
  } else if (device.listen === sensor.sensorId) {
    device.switch = false;
  }
  let result = [{ ...sensor }, { ...device }];
  return {};
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
//             sensorId: {
//               sensorType: "temp-sensor",
//               tempMin: "15",
//               tempMax: "25",
//               controlTemp: {
//                 lowerTemp: "deviceId",
//                 increaseTemp: "deviceId",
//               },
//               sensorId: {
//                 sensorType: "humidity-sensor",
//                 humidityMin: "30",
//                 humidityMax: "60",
//                 controlHumidity: {
//                   lowerHumidity: "deviceId",
//                   increaseHumidity: "deviceId",
//                 },
//               },
//             },
//             devices: {
//               deviceId: {
//                 deviceType: "heat-fan",
//                 switch: "false",
//                 duty: "increaseTemp",
//                 listen: "sensorId",
//               },
//               deviceId: {
//                 deviceType: "cool-fan",
//                 switch: "false",
//                 duty: "lowerTemp",
//                 listen: "sensorId",
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
