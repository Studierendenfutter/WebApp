import React from "react";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Funnel from "./pages/Funnel/Funnel";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Confirm from "./pages/Confirm";
import Settings from "./pages/Settings";
import Cancel from "./pages/Cancel";
import { hydrate, render } from "react-dom";
import Canteens from "./pages/Canteens";
import Meals from "./pages/Meals";
import Share from "./pages/Share/Share";
import Pause from "./pages/Pause";

const App = () => (
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/confirm">
          <Confirm />
        </Route>
        <Route path="/cancel">
          <Cancel />
        </Route>
        <Route path="/pause">
          <Pause />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/funnel">
          <Funnel />
        </Route>
        <Route path="/canteens">
          <Canteens />
        </Route>
        <Route path="/meals">
          <Meals />
        </Route>
        <Route path="/share">
          <Share />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>
);

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
