// importy
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

// renderování komponenty App do DOM na webové stránce
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
