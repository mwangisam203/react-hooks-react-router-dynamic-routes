import React from "react";
import { Route, useRouteMatch, Switch } from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieShow from "./MovieShow";

function MoviesPage({ movies }) {
  const match = useRouteMatch();

  return (
    <div>
      <MoviesList movies={movies} />
      <Switch>
        <Route exact path={match.path}>
          <h3>Choose a movie from the list above</h3>
        </Route>
        <Route path={`${match.path}/:movieId`}>
          <MovieShow movies={movies} />
        </Route>
      </Switch>
    </div>
  );
}

export default MoviesPage;
