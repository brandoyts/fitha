import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import useFetchMovies from "../hooks/useFetchMovies";
import "./css/movies.css";

function Upcoming(props) {
  const category = props.match.path;
  const [page, setPage] = useState(1);
  const { movies, fetchMovies } = useFetchMovies(category, page);

  useEffect(() => {
    fetchMovies(category, page);
  }, []);

  return (
    <div className="movies">
      {movies
        ? movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        : null}
    </div>
  );
}

export default Upcoming;
