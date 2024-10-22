import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"; // BrowserRouter 임포트
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {" "}
      {/* BrowserRouter로 App 컴포넌트를 감쌉니다 */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
