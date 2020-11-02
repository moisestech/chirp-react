import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// COMPONENTS
import App from "./app";

// REDUX
import reducer from "./state/reducers";
import middleware from "./state/middleware";
import { Provider } from "react-redux";
import { createStore } from "redux";

//const store = createStore(reducer, middleware);

// Component
// State
// Lifecycle
// UI

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  document.getElementById("root")
);
