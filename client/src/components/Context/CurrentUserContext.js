import { createContext, useState, useEffect } from "react";
import { checkSessionStorage } from "./CheckSessionStorage";
export const CurrentUserContext = createContext(null);
export const CurrentUserContextProvider = ({ children }) => {
  //itemsArray contains all 300+ items, it is a array of object
  const [itemsArray, setItemsArray] = useState([]);
  const [companyArray, setCompantArray] = useState([]);
  const [pageInfo, setPageInfo] = useState([]);
  //statusBegin is a indicator for finishing fetch data in this context file
  const [status, setStatus] = useState("loading");
  // orderArray contains order information. for example: orderArray = [{_id:6543,qty:2},{_id:6545,qty:4},...]
  const [orderArray, setOrderArray] = useState([]);
  const [renderArray, setRenderArray] = useState([]);
  const [pageNumberArray, setPageNumberArray] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const time = checkSessionStorage("timer", 0);
  const currentTime = Date.now();
  useEffect(() => {
    if (currentTime - time >= 3000) {
      sessionStorage.setItem("timer", JSON.stringify(Date.now()));
      fetch("/api/get-companies")
        .then((res) => res.json())
        .then((data) => {
          console.log(data.message);
          setCompantArray(data.data);
          sessionStorage.setItem("companies", JSON.stringify(data.data));
          return fetch("/api/getPagination")
            .then((res) => res.json())
            .then((data) => {
              console.log(data.message);
              setPageInfo(data.data);
              sessionStorage.setItem("pagination", JSON.stringify(data.data));
              return fetch("/api/get-items")
                .then((res) => res.json())
                .then((data) => {
                  console.log(data.message);
                  setItemsArray(data.data);
                  setStatus("idle");
                  setRenderArray(data.data);
                  sessionStorage.setItem("items", JSON.stringify(data.data));
                  let arr = [];
                  let pageNumber = Math.floor(data.data.length / 25 + 1);
                  for (let i = 1; i <= pageNumber; i++) {
                    arr.push(i);
                  }
                  setPageNumberArray([...arr]);
                })
                .catch((error) => {
                  console.log(error.message);
                });
            })
            .catch((error) => {
              console.log(error.message);
            });
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      setCompantArray(checkSessionStorage("companies", []));
      setPageInfo(checkSessionStorage("pagination", []));
      setItemsArray(checkSessionStorage("items", []));
      setRenderArray(checkSessionStorage("items", []));
      setStatus("idle");
      let arr = [];
      let pageNumber = Math.floor(
        checkSessionStorage("items", []).length / 25 + 1
      );
      for (let i = 1; i <= pageNumber; i++) {
        arr.push(i);
      }
      setPageNumberArray([...arr]);
    }
  }, []);
  return (
    <CurrentUserContext.Provider
      value={{
        itemsArray,
        companyArray,
        status,
        orderArray,
        pageInfo,
        renderArray,
        pageNumberArray,
        pageNumber,
        setPageNumber,
        setPageNumberArray,
        setItemsArray,
        setCompantArray,
        setStatus,
        setOrderArray,
        setPageInfo,
        setRenderArray,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
