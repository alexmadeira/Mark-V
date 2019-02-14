import React from 'react';
import { Switch } from 'react-router-dom';

import routesList from './routesList';
import FancyRoute from './fancyRoute';

const Routes = () => (
  <Switch>
    {routesList.map(route => (
      <FancyRoute key={route.title} {...route} />
    ))}
  </Switch>
);

export default Routes;
