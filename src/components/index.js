import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// COMPONENTS
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";

export default function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </Router>
  );
}
