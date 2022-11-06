import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
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
        <Route path="/product">
          <Product />
        </Route>
      </Switch>
    </Router>
  );
}
