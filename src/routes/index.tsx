import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "../pages/Home";
import ProfileView from "../pages/ProfileView";

export default function Routes() {
    return (
      <Router>
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/profile">
              <ProfileView />
            </Route>

          </Switch>
      </Router>
    );
  }