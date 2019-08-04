import React from "react";
import { Route, HashRouter as Router, Redirect } from "react-router-dom";

import Market from "@/pages/market";
import Variety from "@/pages/variety";
import Shelf from "@/pages/shelf";
import Mine from "@/pages/mine";


export default (
  <Router>
    <Route exact path="/" render={() => <Redirect to={"/market"} />} />
    <Route path="/market" component={Market} />
    <Route path="/variety" component={Variety} />
    <Route path="/shelf" component={Shelf} />
    <Route path="/mine" component={Mine} />
  </Router>
);

