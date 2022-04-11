import { createContext, useState, useEffect } from "react";
export const CurrentUserContext = createContext(null);
export const CurrentUserContextProvider = ({ children }) => {
  //userInfo has all the data of the user
  //weather has all of the current weather data based on greenhouse location
  const [userInfo, setUserInfo] = useState({});
  const [weather, setWeather] = useState({});
  //statusBegin is a indicator for finishing fetch data in this context file
  const [status, setStatus] = useState({
    state: "loading",
    msg: "",
    status: "",
  });

  const userId = "6db20ea8-b66c-4d00-90b2-33989a4a5ec8";
  useEffect(() => {
    console.log("Starting fetches");
    fetch(`/api/get-user/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.message, data);
        console.log("checking data");
        if (data.status === 200) {
          setUserInfo(data.data);
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
  }, []);
  console.log(status);
  return (
    <CurrentUserContext.Provider
      value={{
        userInfo,
        setUserInfo,
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
