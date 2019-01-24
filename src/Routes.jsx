import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Home, Product, About } from './containers';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route path="/product" component={Product} />
  </Switch>
);

export default Routes;
