const usersData = [
  {
    _id: null,
    userInfo: {
      name: "John",
      email: "john@mcjohn.com",
      location: { lat: 45.52099, lng: -73.59463 },
      data: [
        {
          timeStamp: {
            temp: "number",
            humidity: "number",
          },
        },
      ],
      zones: [
        {
          zoneId: {
            zoneName: "Zone 1",
            sensors: [
              {
                sensorId: {
                  name: "Temperature Sensor",
                  sensorType: "temp-sensor",
                  pos: 1,
                  tempMin: "24",
                  tempMax: "29",
                  controlTemp: {
                    lowerTemp: "deviceId",
                    increaseTemp: "deviceId",
                  },
                },
                sensorId: {
                  name: "Humidity Sensor",
                  sensorType: "humidity-sensor",
                  pos: 3,
                  humidityMin: "50",
                  humidityMax: "55",
                  controlHumidity: {
                    lowerHumidity: "deviceId",
                    increaseHumidity: "deviceId",
                  },
                },
              },
            ],
            devices: [
              {
                deviceId: {
                  name: "Heating Fan",
                  deviceType: "heat-fan",
                  pos: 2,
                  switch: "false",
                  duty: "increaseTemp",
                  listen: "sensorId",
                },
                deviceId: {
                  name: "Cooling Fan",
                  deviceType: "cool-fan",
                  pos: 4,
                  switch: "false",
                  duty: "lowerTemp",
                  listen: "sensorId",
                },
              },
            ],
          },
        },
      ],
    },
  },
];

module.exports = { usersData };
