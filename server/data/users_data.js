const usersData = [
  {
    _id: null,
    userInfo: {
      name: "John",
      email: "john@mcjohn.com",
      templateVer: "0.1",
      location: { lat: 45.52099, lng: -73.59463 },
      data: [
        {
          zoneId: "zoneId",
          zoneData: [
            {
              sensorId: "sensorId",
              sensorType: "temp-sensor",
              sensorData: [
                {
                  timeStamp: "time",
                  temp: "number",
                },
              ],
            },
            {
              sensorId: "sensorId",
              sensorType: "humidity-sensor",
              sensorData: [
                {
                  timeStamp: "time",
                  humidity: "number",
                },
              ],
            },
          ],
        },
      ],
      zones: [
        {
          zoneId: "zoneId",
          data: {
            zoneName: "Zone 1",
            sensors: [
              {
                sensorId: "sensorId",
                name: "Temperature Sensor",
                sensorType: "temp-sensor",
                pos: 1,
                tempReading: "25",
                tempMin: "24",
                tempMax: "29",
                controlTemp: {
                  lowerTemp: "deviceId",
                  increaseTemp: "deviceId",
                },
              },
              {
                sensorId: "sensorId",
                name: "Humidity Sensor",
                sensorType: "humidity-sensor",
                pos: 3,
                humidityReading: "50",
                humidityMin: "50",
                humidityMax: "55",
                controlHumidity: {
                  lowerHumidity: "deviceId",
                  increaseHumidity: "deviceId",
                },
              },
            ],
            devices: [
              {
                deviceId: "deviceId",
                name: "Heating Fan",
                deviceType: "heat-fan",
                pos: 2,
                switch: "false",
                duty: "increaseTemp",
                listen: "sensorId",
              },
              {
                deviceId: "deviceId",
                name: "Cooling Fan",
                deviceType: "cool-fan",
                pos: 4,
                switch: "false",
                duty: "lowerTemp",
                listen: "sensorId",
              },
            ],
          },
        },
      ],
    },
  },
];

module.exports = { usersData };
