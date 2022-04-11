import ReactDOM from "react-dom";
import App from "./components/App";
import { CurrentUserContextProvider } from "./components/Context/CurrentUserContext";

ReactDOM.render(
  <CurrentUserContextProvider>
    <App />
  </CurrentUserContextProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
