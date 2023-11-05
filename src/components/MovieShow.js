import React from "react";
import { useParams } from "react-router-dom";
function MovieShow({ movies }) {
  const params = useParams();
  const selectedMovie = movies[params.movieId];

  return (
    <div>
      <h3>{selectedMovie.title}</h3>
    </div>
  );
}

export default MovieShow;
