import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Component
// State
// Lifecycle
// UI

function App() {
  return (
    <div>
      <h1>Welcome to Chirp!</h1>
      <img src="https://raw.githubusercontent.com/moisestech/chirp-react/master/public/Chirp_logo.png" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
