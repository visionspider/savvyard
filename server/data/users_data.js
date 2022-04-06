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
            sensors: [
              {
                sensorId: {
                  sensorType: "temp-sensor",
                  tempMin: "15",
                  tempMax: "25",
                  controlTemp: {
                    lowerTemp: "deviceId",
                    increaseTemp: "deviceId",
                  },
                },
                sensorId: {
                  sensorType: "humidity-sensor",
                  humidityMin: "30",
                  humidityMax: "60",
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
                  deviceType: "heat-fan",
                  switch: "false",
                  duty: "increaseTemp",
                  listen: "sensorId",
                },
                deviceId: {
                  deviceType: "cool-fan",
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
