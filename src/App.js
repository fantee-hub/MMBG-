import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/** Pages */
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Cv from "./components/Pages/Cv";
import Photography from "./components/Pages/Photography";
import Research from "./components/Pages/Research";
import Showcase from "./components/Pages/Showcase";
import Teaching from "./components/Pages/Teaching";
/** Pages */

/** Navbar */
import Nav from "./components/Nav/Nav";
/** Navbar */

/** styles */
import Globalstyles from "./styles/Globalstyles";
/** styles */

function App() {
  return (
    <>
      <Globalstyles />
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/CV" component={Cv} />
          <Route path="/Photography" component={Photography} />
          <Route path="/Research" component={Research} />
          <Route path="/Showcase" component={Showcase} />
          <Route path="/Teaching" component={Teaching} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
