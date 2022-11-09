import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProfileView from "../pages/ProfileView";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={ProfileView} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}
