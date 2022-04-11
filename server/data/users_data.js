const usersData = [
  {
    _id: "6db20ea8-b66c-4d00-90b2-33989a4a5ec8",
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
                id: "z1sensorId1",
                name: "Temperature Sensor",
                sensorType: "temp-sensor",
                pos: 1,
                reading: "25 °C",
                min: "24",
                max: "29",
                controlTemp: {
                  lowerTemp: "deviceId",
                  increaseTemp: "deviceId",
                },
              },
              {
                id: "z1sensorId3",
                name: "Humidity Sensor",
                sensorType: "humidity-sensor",
                pos: 3,
                reading: "50 %",
                min: "50",
                max: "55",
                controlHumidity: {
                  lowerHumidity: "deviceId",
                  increaseHumidity: "deviceId",
                },
              },
            ],
            devices: [
              {
                id: "deviceId2",
                name: "Heating Fan",
                deviceType: "heat-fan",
                pos: 2,
                switch: "false",
                duty: "increaseTemp",
                listen: "z1sensorId1",
              },
              {
                id: "deviceId4",
                name: "Cooling Fan",
                deviceType: "cool-fan",
                pos: 4,
                switch: "false",
                duty: "lowerTemp",
                listen: "z1sensorId1",
              },
            ],
          },
        },
        {
          zoneId: "zoneId",
          data: {
            zoneName: "Zone 2",
            sensors: [
              {
                id: "z2sensorId1",
                name: "Temperature Sensor",
                sensorType: "temp-sensor",
                pos: 1,
                reading: "25 °C",
                min: "24",
                max: "29",
                controlTemp: {
                  lowerTemp: "deviceId",
                  increaseTemp: "deviceId",
                },
              },
              {
                id: "z2sensorId3",
                name: "Humidity Sensor",
                sensorType: "humidity-sensor",
                pos: 3,
                reading: "50 %",
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
                id: "deviceId",
                name: "Heating Fan",
                deviceType: "heat-fan",
                pos: 2,
                switch: "false",
                duty: "increaseTemp",
                listen: "z2sensorId1",
              },
              {
                id: "deviceId",
                name: "Cooling Fan",
                deviceType: "cool-fan",
                pos: 4,
                switch: "false",
                duty: "lowerTemp",
                listen: "z2sensorId1",
              },
            ],
          },
        },
        {
          zoneId: "zoneId",
          data: {
            zoneName: "Zone 3",
            sensors: [
              {
                id: "z3sensorId1",
                name: "Temperature Sensor",
                sensorType: "temp-sensor",
                pos: 1,
                reading: "25 °C",
                min: "24",
                max: "29",
                controlTemp: {
                  lowerTemp: "deviceId",
                  increaseTemp: "deviceId",
                },
              },
              {
                id: "z3sensorId3",
                name: "Humidity Sensor",
                sensorType: "humidity-sensor",
                pos: 3,
                reading: "50 %",
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
                id: "deviceId2",
                name: "Heating Fan",
                deviceType: "heat-fan",
                pos: 2,
                switch: "false",
                duty: "increaseTemp",
                listen: "z3sensorId1",
              },
              {
                id: "deviceId4",
                name: "Cooling Fan",
                deviceType: "cool-fan",
                pos: 4,
                switch: "false",
                duty: "lowerTemp",
                listen: "z3sensorId1",
              },
            ],
          },
        },
        {
          zoneId: "zoneId",
          data: {
            zoneName: "Zone 4",
            sensors: [
              {
                id: "z4sensorId1",
                name: "Temperature Sensor",
                sensorType: "temp-sensor",
                pos: 1,
                reading: "25 °C",
                min: "24",
                max: "29",
                controlTemp: {
                  lowerTemp: "deviceId",
                  increaseTemp: "deviceId",
                },
              },
              {
                id: "z4sensorId3",
                name: "Humidity Sensor",
                sensorType: "humidity-sensor",
                pos: 3,
                reading: "50 %",
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
                id: "deviceId",
                name: "Heating Fan",
                deviceType: "heat-fan",
                pos: 2,
                switch: "false",
                duty: "increaseTemp",
                listen: "z4sensorId1",
              },
              {
                id: "deviceId",
                name: "Cooling Fan",
                deviceType: "cool-fan",
                pos: 4,
                switch: "false",
                duty: "lowerTemp",
                listen: "z4sensorId1",
              },
            ],
          },
        },
        {
          zoneId: "zoneId",
          data: {
            zoneName: "Zone 5",
            sensors: [
              {
                id: "z5sensorId1",
                name: "Temperature Sensor",
                sensorType: "temp-sensor",
                pos: 1,
                reading: "25 °C",
                min: "24",
                max: "29",
                controlTemp: {
                  lowerTemp: "deviceId",
                  increaseTemp: "deviceId",
                },
              },
              {
                id: "z5sensorId3",
                name: "Humidity Sensor",
                sensorType: "humidity-sensor",
                pos: 3,
                reading: "50 %",
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
                id: "deviceId2",
                name: "Heating Fan",
                deviceType: "heat-fan",
                pos: 2,
                switch: "false",
                duty: "increaseTemp",
                listen: "z5sensorId1",
              },
              {
                id: "deviceId4",
                name: "Cooling Fan",
                deviceType: "cool-fan",
                pos: 4,
                switch: "false",
                duty: "lowerTemp",
                listen: "z5sensorId1",
              },
            ],
          },
        },
        {
          zoneId: "zoneId",
          data: {
            zoneName: "Zone 6",
            sensors: [
              {
                id: "z6sensorId1",
                name: "Temperature Sensor",
                sensorType: "temp-sensor",
                pos: 1,
                reading: "25 °C",
                min: "24",
                max: "29",
                controlTemp: {
                  lowerTemp: "deviceId",
                  increaseTemp: "deviceId",
                },
              },
              {
                id: "z6sensorId3",
                name: "Humidity Sensor",
                sensorType: "humidity-sensor",
                pos: 3,
                reading: "50 %",
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
                id: "deviceId",
                name: "Heating Fan",
                deviceType: "heat-fan",
                pos: 2,
                switch: "false",
                duty: "increaseTemp",
                listen: "z6sensorId1",
              },
              {
                id: "deviceId",
                name: "Cooling Fan",
                deviceType: "cool-fan",
                pos: 4,
                switch: "false",
                duty: "lowerTemp",
                listen: "z6sensorId1",
              },
            ],
          },
        },
      ],
    },
  },
];

module.exports = { usersData };
