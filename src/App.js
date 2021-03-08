import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './containers/Home';
import Movie from './components/movie/SingleMovie';

function App() {
  return (
    <Switch>
      <Route path='/movie-finder' exact>
        <Home />
      </Route>
      <Route path='/movie-finder/movies/:id' children={<Movie />} />
    </Switch>
  );
}

export default App;
