import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import RocketList from "./components/Rocketwidget/RocketList";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <RocketList />
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.unregister();
