import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import "./css/movies.css";

const API_KEY = process.env.REACT_APP_API_KEY;

function Movies({ category }) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  //*FETCH MOVIE BASED ON CATEGORY
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}&language=en-US&page=${page}`
      )
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);

  return (
    <div className="movies">
      {movies
        ? movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        : null}
    </div>
  );
}

export default Movies;
