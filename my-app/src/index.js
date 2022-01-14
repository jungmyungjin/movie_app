import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// css 작성 방법 1 : 모든 페이지에 적용된다.
//import "./style.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
