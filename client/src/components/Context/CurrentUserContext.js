import { createContext, useState, useEffect } from "react";
import _ from "lodash";
export const CurrentUserContext = createContext(null);
export const CurrentUserContextProvider = ({ children }) => {
  //userInfo has all the data of the user
  //weather has all of the current weather data based on greenhouse location
  const [userInfo, setUserInfo] = useState({});
  const [editUserInfo, setEditUserInfo] = useState({});
  const [edit, setEdit] = useState(false);
  const [weather, setWeather] = useState({});
  //status is a indicator for finishing fetch data in this context file
  const [status, setStatus] = useState({
    state: "loading",
    msg: "",
    status: "",
  });
  //SUGGESTIONS of doing things differently : when I cancel refetch the data from the server
  const userId = "6db20ea8-b66c-4d00-90b2-33989a4a5ec8";
  // getUser = () => {};
  useEffect(() => {
    console.log("Starting fetches");
    fetch(`/api/get-user/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.message, data);
        console.log("checking data");
        if (data.status === 200) {
          //PROBLEM IS HERE
          console.log("hello");
          setUserInfo({ ...data.data, copy: 1 });
          setEditUserInfo({ ...data.data, copy: 2 });

          //MAYBE?
          //seperate fetches
          return fetch(`/api/weather/${userId}`)
            .then((res) => res.json())
            .then((data) => {
              console.log(data.message);
              if (data.status === 200) {
                setWeather(data.data);
                setStatus({ ...status, state: "idle" });
              } else {
                setStatus({
                  ...status,
                  state: "error",
                  msg: data.message,
                  status: data.status,
                });
              }
            })
            .catch((error) => {
              console.log(error.message);
              setStatus({
                ...status,
                state: "error",
                msg: error.message,
                status: error.status,
              });
            });
        } else {
          setStatus({
            ...status,
            state: "error",
            msg: data.message,
            status: data.status,
          });
        }
      })
      .catch((error) => {
        console.log(error.message);
        setStatus({
          ...status,
          state: "error",
          msg: error.message,
          status: error.status,
        });
      });
  }, [userId]);

  const sortEditUserInfoByPos = () => {
    const deviceArr = [];
    const zones = _.cloneDeep(editUserInfo.userInfo.zones);
    zones.forEach((zone) =>
      deviceArr.push(
        [...zone.data.sensors, ...zone.data.devices].sort(
          (device1, device2) => device1.pos - device2.pos
        )
      )
    );
    return deviceArr;
  };
  const editSensorOrDevice = (deviceArr) => {
    let devices = [];
    let sensors = [];
    const clone = _.cloneDeep(editUserInfo);

    deviceArr.forEach((deviceList, pos) => {
      if (deviceList.length === 0) {
        clone.userInfo.zones.forEach((zone, zPos) => {
          if (pos === zPos) {
            zone.data.sensors = [];
            zone.data.devices = [];
          }
        });
      }
      deviceList.forEach((device, pos2) => {
        if (device.id.includes(`z${pos + 1}sensorId`)) {
          sensors.push(device);
        } else if (device.id.includes(`z${pos + 1}deviceId`)) {
          devices.push(device);
        }
        if (deviceList.length === pos2 + 1) {
          // console.log("inside length = pos ", deviceList);
          clone.userInfo.zones.forEach((zone) => {
            if (zone.zoneId === device.relation) {
              zone.data.sensors = [...sensors];
              zone.data.devices = [...devices];
              sensors = [];
              devices = [];
            }
          });
        }
      });
    });
    return clone;
  };

  const deleteZoneOrDevice = (id, type) => {
    //find zone or device by id
    // increase or decrease pos of other zones or devices by 1
    const clone = _.cloneDeep(editUserInfo);
    const deviceArr = sortEditUserInfoByPos();
    // console.log(clone, id);
    if (type === "zone") {
      // console.log("in zone");
      [...clone.userInfo.zones].forEach((zone, pos) => {
        if (zone.zoneId === id) {
          clone.userInfo.zones.splice(pos, 1);
        }
      });

      setEditUserInfo(clone);
    } else if (type === "device") {
      [...deviceArr].forEach((devices, pos) => {
        devices.forEach((device, pos2) => {
          if (device.id === id) {
            // console.log(device);
            deviceArr[pos].splice(pos2, 1);
          }
        });
      });

      setEditUserInfo(editSensorOrDevice(deviceArr));
    }
  };

  const addZoneOrDevice = (zoneOrDevice, type) => {
    //find zone or device by id
    // increase or decrease pos of other zones or devices by 1
    const clone = _.cloneDeep(editUserInfo);

    const deviceArr = sortEditUserInfoByPos();

    if (type === "zone") {
      clone.userInfo.zones.splice(zoneOrDevice.pos - 1, 0, zoneOrDevice);

      setEditUserInfo(clone);
    } else if (type === "device") {
      [...deviceArr].forEach((devices, pos) => {
        if (devices.length === 0) {
          deviceArr[pos].splice(zoneOrDevice.pos - 1, 0, zoneOrDevice);
        }
        devices.forEach((device, pos2) => {
          if (
            device.relation === zoneOrDevice.relation &&
            device.id !== zoneOrDevice.id &&
            0 === pos2
            //RECHECK THIS CONDITION DOUBLES ARE STILL BEING MADE
          ) {
            deviceArr[pos].splice(zoneOrDevice.pos - 1, 0, zoneOrDevice);
          }
        });
      });
      // console.log(deviceArr);
      setEditUserInfo(editSensorOrDevice(deviceArr));
    }
  };

  const cancelEdit = () => {
    const clone = _.cloneDeep(userInfo);

    setEditUserInfo(clone);
  };
  return (
    <CurrentUserContext.Provider
      value={{
        edit,
        setEdit,
        userInfo,
        setUserInfo,
        editUserInfo,
        setEditUserInfo,
        sortEditUserInfoByPos,
        editSensorOrDevice,
        deleteZoneOrDevice,
        addZoneOrDevice,
        cancelEdit,
        weather,
        setWeather,
        status,
        setStatus,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
