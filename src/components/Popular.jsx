import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import Pagination from "react-js-pagination";
import useFetchMovies from "../hooks/useFetchMovies";

import "./css/movies.css";

function Popular(props) {
  const category = props.match.path;
  const [activePage, setActivePage] = useState(1);
  const { movies, fetchMovies } = useFetchMovies(category, activePage);

  useEffect(() => {
    fetchMovies(category, activePage);
  }, []);

  return (
    <div className="movies">
      {movies ? (
        <Pagination
          activePage={activePage}
          itemsCountPerPage={movies.length}
          totalItemsCount={100}
          pageRangeDisplayed={5}
          innerClass="movies__pagination"
          linkClass="movies__pagination__link"
          prevPageText="Previous"
          nextPageText="Next"
          firstPageText="First Page"
          lastPageText="Last Page"
          activeLinkClass="movies__pagination__active"
        />
      ) : null}

      <div className="movies__container">
        {movies
          ? movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
          : null}
      </div>
    </div>
  );
}

export default Popular;
