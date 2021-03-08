import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './containers/Home';
import Movies from './components/movie/Movies';

function App() {
  return (
    <Switch>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/movies/:id' children={<Movies />} />
    </Switch>
  );
}

export default App;
