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
          zoneId: "zoneId1",
          zoneData: [
            {
              sensorId: "z1sensorId1",
              type: "temp-sensor",
              sensorData: [
                {
                  timeStamp: "1",
                  temp: "28",
                },
              ],
            },
            {
              sensorId: "z1sensorId3",
              type: "humidity-sensor",
              sensorData: [
                {
                  timeStamp: "1",
                  humidity: "50",
                },
              ],
            },
            {
              sensorId: "z1sensorId1",
              type: "temp-sensor",
              sensorData: [
                {
                  timeStamp: "2",
                  temp: "27",
                },
              ],
            },
            {
              sensorId: "z1sensorId3",
              type: "humidity-sensor",
              sensorData: [
                {
                  timeStamp: "2",
                  humidity: "48",
                },
              ],
            },
            {
              sensorId: "z1sensorId1",
              type: "temp-sensor",
              sensorData: [
                {
                  timeStamp: "3",
                  temp: "28",
                },
              ],
            },
            {
              sensorId: "z1sensorId3",
              type: "humidity-sensor",
              sensorData: [
                {
                  timeStamp: "3",
                  humidity: "47",
                },
              ],
            },
            {
              sensorId: "z1sensorId1",
              type: "temp-sensor",
              sensorData: [
                {
                  timeStamp: "4",
                  temp: "29",
                },
              ],
            },
            {
              sensorId: "z1sensorId3",
              type: "humidity-sensor",
              sensorData: [
                {
                  timeStamp: "4",
                  humidity: "45",
                },
              ],
            },
          ],
        },
      ],
      zones: [
        {
          zoneId: "zoneId1",
          pos: 1,

          data: {
            zoneName: "Zone 1",
            sensors: [
              {
                id: "z1sensorId1",
                name: "Temperature Sensor",
                relation: "zoneId1",
                type: "temp-sensor",
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
                relation: "zoneId1",
                type: "humidity-sensor",
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
                id: "z1deviceId2",
                name: "Heating Fan",
                relation: "zoneId1",
                type: "heat-fan",
                pos: 2,
                switch: false,
                duty: "increaseTemp",
                listen: "z1sensorId1",
              },
              {
                id: "z1deviceId4",
                name: "Cooling Fan",
                relation: "zoneId1",
                type: "cool-fan",
                pos: 4,
                switch: false,
                duty: "lowerTemp",
                listen: "z1sensorId1",
              },
            ],
          },
        },
        {
          zoneId: "zoneId2",
          pos: 2,
          data: {
            zoneName: "Zone 2",
            sensors: [
              {
                id: "z2sensorId1",
                name: "Temperature Sensor",
                relation: "zoneId2",
                type: "temp-sensor",
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
                relation: "zoneId2",
                type: "humidity-sensor",
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
                id: "z2deviceId2",
                name: "Heating Fan",
                relation: "zoneId2",
                type: "heat-fan",
                pos: 2,
                switch: false,
                duty: "increaseTemp",
                listen: "z2sensorId1",
              },
              {
                id: "z2deviceId4",
                name: "Cooling Fan",
                relation: "zoneId2",
                type: "cool-fan",
                pos: 4,
                switch: false,
                duty: "lowerTemp",
                listen: "z2sensorId1",
              },
            ],
          },
        },
        {
          zoneId: "zoneId3",
          pos: 3,
          data: {
            zoneName: "Zone 3",
            sensors: [
              {
                id: "z3sensorId1",
                name: "Temperature Sensor",
                relation: "zoneId3",
                type: "temp-sensor",
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
                relation: "zoneId3",
                type: "humidity-sensor",
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
                id: "z3deviceId2",
                name: "Heating Fan",
                relation: "zoneId3",
                type: "heat-fan",
                pos: 2,
                switch: false,
                duty: "increaseTemp",
                listen: "z3sensorId1",
              },
              {
                id: "z3deviceId4",
                name: "Cooling Fan",
                relation: "zoneId3",
                type: "cool-fan",
                pos: 4,
                switch: false,
                duty: "lowerTemp",
                listen: "z3sensorId1",
              },
            ],
          },
        },
        {
          zoneId: "zoneId4",
          pos: 4,
          data: {
            zoneName: "Zone 4",
            sensors: [
              {
                id: "z4sensorId1",
                name: "Temperature Sensor",
                relation: "zoneId4",
                type: "temp-sensor",
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
                relation: "zoneId4",
                type: "humidity-sensor",
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
                id: "z4deviceId2",
                name: "Heating Fan",
                relation: "zoneId4",
                type: "heat-fan",
                pos: 2,
                switch: false,
                duty: "increaseTemp",
                listen: "z4sensorId1",
              },
              {
                id: "z4deviceId4",
                name: "Cooling Fan",
                relation: "zoneId4",
                type: "cool-fan",
                pos: 4,
                switch: false,
                duty: "lowerTemp",
                listen: "z4sensorId1",
              },
            ],
          },
        },
        {
          zoneId: "zoneId5",
          pos: 5,
          data: {
            zoneName: "Zone 5",
            sensors: [
              {
                id: "z5sensorId1",
                name: "Temperature Sensor",
                relation: "zoneId5",
                type: "temp-sensor",
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
                relation: "zoneId5",
                type: "humidity-sensor",
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
                id: "z5deviceId2",
                name: "Heating Fan",
                relation: "zoneId5",
                type: "heat-fan",
                pos: 2,
                switch: false,
                duty: "increaseTemp",
                listen: "z5sensorId1",
              },
              {
                id: "z5deviceId4",
                name: "Cooling Fan",
                relation: "zoneId5",
                type: "cool-fan",
                pos: 4,
                switch: false,
                duty: "lowerTemp",
                listen: "z5sensorId1",
              },
            ],
          },
        },
        {
          zoneId: "zoneId6",
          pos: 6,
          data: {
            zoneName: "Zone 6",
            sensors: [
              {
                id: "z6sensorId1",
                name: "Temperature Sensor",
                relation: "zoneId6",
                type: "temp-sensor",
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
                relation: "zoneId6",
                type: "humidity-sensor",
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
                id: "z6deviceId2",
                name: "Heating Fan",
                relation: "zoneId6",
                type: "heat-fan",
                pos: 2,
                switch: false,
                duty: "increaseTemp",
                listen: "z6sensorId1",
              },
              {
                id: "z6deviceId4",
                name: "Cooling Fan",
                relation: "zoneId6",
                type: "cool-fan",
                pos: 4,
                switch: false,
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
