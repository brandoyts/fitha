import React from "react";
import MovieCard from "./MovieCard";
import useFetchMovies from "../hooks/useFetchMovies";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import "./css/movies.css";

function Upcoming(props) {
  const category = props.match.path;
  const [page] = useInfiniteScroll();
  const { movies } = useFetchMovies(category, page);

  return (
    <div className="movies">
      <div className="movies__container">
        {movies &&
          movies.map((movie, index) => (
            <MovieCard key={(movie.id, index)} movie={movie} />
          ))}
      </div>
    </div>
  );
}

export default Upcoming;
