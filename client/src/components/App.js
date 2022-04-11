import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Data from "./Data";
import GlobalStyle from "./GlobalStyles";
import Header from "./Header";
import Home from "./Home";
import Weather from "./Weather";
import Welcome from "./Welcome";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <>
          <Header />
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/weather">
            <Weather />
          </Route>
          <Route exact path="/data">
            <Data />
          </Route>
        </>
      </Switch>
    </Router>
  );
};

export default App;
