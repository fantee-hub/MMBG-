import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/** Pages */
import Home from "./components/Pages/Home";
import Faq from "./components/Pages/Faq";
import Team from "./components/Pages/Team";
import About from "./components/Pages/About";
import ScrollTop from "./components/Pages/ScrollTop";
/** Pages */

/** styles */
import Globalstyles from "./styles/Globalstyles";

/** styles */

function App() {
  return (
    <>
      <Globalstyles />

      <Router>
        <ScrollTop />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Faq" component={Faq} />
          <Route path="/Team" component={Team} />
          <Route path="/About" component={About} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
