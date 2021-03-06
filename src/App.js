import React from "react";
import Welcome from "./admin/welcome/Welcome.page";
import Login from "./admin/Login/Login.component";
import ProductView from "./admin/product-view/ProductView.component";
// import Admin from "./admin/HomePage.page";
import HomePage from "./page/home/HomePage.component";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      special: "special",
      isLoggedIn: true,
    };
  }

  render() {
    const { special } = this.state;
    return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path={`/${special}`} exact>
            <Welcome {...this.state} />
          </Route>
          <Route path={`/${special}/login`} exact>
            <Login {...this.state} />
          </Route>
          <Route path={`/${special}/product-v`} exact>
            <ProductView />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
