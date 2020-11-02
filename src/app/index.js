import "./app.css";
import React, { useState } from "react";

// CONTEXT
import { ThemeProvider } from "../contexts/theme";

// ROUTER
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// COMPONENTS
import Sidebar from "../components/Sidebar";
import Loading from "../components/Loading";

// PAGES
const Home = React.lazy(() => import("../pages/Home"));
const Explore = React.lazy(() => import("../pages/Explore"));
const Notifications = React.lazy(() => import("../pages/Notifications"));
const Messages = React.lazy(() => import("../pages/Messages"));
const Bookmarks = React.lazy(() => import("../pages/Bookmarks"));
const Lists = React.lazy(() => import("../pages/Lists"));
const Profile = React.lazy(() => import("../pages/Profile"));

// Component
// State
// Lifecycle
// UI

export default function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme((theme) => (theme === "ligth" ? "dark" : "light"));

  return (
    <Router>
      <ThemeProvider value={theme}>
        <div className={`app ${theme}`}>
          {/* SIDEBAR TOGGLE THEME */}
          <Sidebar />

          <div className="container">
            <React.Suspense fallback={<Loading />}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/explore" component={Explore} />
                <Route exact path="/notifications" component={Notifications} />
                <Route exact path="/messages" component={Messages} />
                <Route exact path="/bookmarks" component={Bookmarks} />
                <Route exact path="/lists" component={Lists} />
                <Route exact path="/profile" component={Profile} />
              </Switch>
            </React.Suspense>
          </div>
        </div>
      </ThemeProvider>
    </Router>
  );
}
