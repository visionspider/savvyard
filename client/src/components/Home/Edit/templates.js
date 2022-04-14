export const deviceTemplate = [
  {
    id: "zNUMsensorIdNUM",
    name: "Temperature Sensor",
    relation: "zoneIdNUM",
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
    id: "zNUMsensorIdNUM",
    name: "Humidity Sensor",
    relation: "zoneIdNUM",
    type: "humidity-sensor",
    pos: 0,
    reading: "50 %",
    min: "50",
    max: "55",
    controlHumidity: {
      lowerHumidity: "deviceId",
      increaseHumidity: "deviceId",
    },
  },
  {
    id: "zNUMdeviceIdNUM",
    name: "Heating Fan",
    relation: "zoneIdNUM",
    type: "heat-fan",
    pos: 0,
    switch: "false",
    duty: "increaseTemp",
    listen: "zNUMsensorIdNUM",
  },
  {
    id: "zNUMdeviceIdNUM",
    name: "Cooling Fan",
    relation: "zoneIdNUM",
    type: "cool-fan",
    pos: 0,
    switch: "false",
    duty: "lowerTemp",
    listen: "zNUMsensorIdNUM",
  },
];

export const zoneTemplate = {
  zoneId: "zoneIdNUM",
  pos: 0,

  data: {
    zoneName: "Zone 1",
    sensors: [],
    devices: [],
  },
};
