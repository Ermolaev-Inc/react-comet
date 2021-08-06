import React from "react";
import ReactDOM from "react-dom";
import "./index.sass";
import { Routes } from "./Routes";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root"),
);
