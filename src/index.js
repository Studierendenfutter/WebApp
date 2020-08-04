import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Funnel from "./pages/Funnel/Funnel";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Confirm from "./pages/Confirm";
import Settings from "./pages/Settings";
import Cancel from "./pages/Cancel";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/confirm">
          <Confirm />
        </Route>
        <Route path="/cancel">
          <Cancel />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/funnel">
          <Funnel />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
