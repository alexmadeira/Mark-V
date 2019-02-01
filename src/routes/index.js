import React from "react";
import { Switch } from "react-router-dom";

import routesList from "./routesList";
import FancyRoute from "./fancyRoute";

const Routes = () => (
  <Switch>
    {routesList.map((route, i) => (
      <FancyRoute key={i} {...route} />
    ))}
  </Switch>
);

export default Routes;
