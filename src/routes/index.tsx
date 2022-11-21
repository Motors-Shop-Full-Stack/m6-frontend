import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Product from "../pages/Product";
import ProfileView from "../pages/ProfileView";
import Register from "../pages/Register";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile/:id" component={ProfileView} />
        <Route path="/product/:id" component={Product} />
      </Switch>
    </Router>
  );
};

export default Routes;
