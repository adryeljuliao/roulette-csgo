import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Roulette from './pages/Roulette';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Roulette} />
      </Switch>
    </BrowserRouter>
  );
}
