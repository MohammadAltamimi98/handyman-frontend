import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../home';
import Admin from '../admin';
import Customer from '../customer';
function Main() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/customer" component={Customer} />
      <Route exact path="/admin" component={Admin} />
      <Route>
        <div>404</div>
      </Route>
    </Switch>
  );
}

export default Main;
