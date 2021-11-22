import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/** Pages */
import Home from "./components/Pages/Home";
import Faq from "./components/Pages/Faq";
import Team from "./components/Pages/Team";
/** Pages */

/** styles */
import Globalstyles from "./styles/Globalstyles";
/** styles */

function App() {
  return (
    <>
      <Globalstyles />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Faq" component={Faq} />
          <Route path="/Team" component={Team} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
