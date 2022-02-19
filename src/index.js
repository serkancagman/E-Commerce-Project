import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "mainstyle/main.css"
import "antd/dist/antd.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import App from "./App";

ReactDOM.render(
 // <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
//  </React.StrictMode>,
  document.getElementById("root")
);
