import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
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
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
      </Router>
    );
  }