import React from "react";

import { Switch, Route } from "react-router-dom";

import Home from "../pages/home";
import Projects from "../pages/projetos";
import Project from "../pages/projeto";
import Curriculo from "../pages/curriculo";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/projetos" component={Projects} />
    <Route exact path="/projeto/:slug" component={Project} />
    <Route exact path="/curriculo" component={Curriculo} />
  </Switch>
);

export default Routes;
