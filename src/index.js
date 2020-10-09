import ReactDOM from "react-dom";
import "./index.css";

// COMPONENTS
import App from "./components";

// REDUX
import reducer from "./reducers";
import middleware from "./middleware";
import { Provider } from "react-redux";
import { createStore } from "redux";

//const store = createStore(reducer, middleware);

// Component
// State
// Lifecycle
// UI

ReactDOM.render(<App />, document.getElementById("root"));
