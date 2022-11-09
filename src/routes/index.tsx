import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import ProfileView from "../pages/ProfileView";
import Register from "../pages/Register";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={ProfileView} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
};
export default Routes;
