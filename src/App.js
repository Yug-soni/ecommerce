import React from "react";
import Welcome from "./admin/welcome/Welcome.page";
import Login from "./admin/Login/Login.component";
import ProductView from "./admin/product-view/ProductView.component";
// import Admin from "./admin/HomePage.page";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/special/welcome" exact>
            <Welcome />
          </Route>
          <Route path="/special/" exact>
            <Welcome />
          </Route>
          <Route path="/special/login" exact>
            <Login />
          </Route>
          <Route path="/special/product-v" exact>
            <ProductView />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
