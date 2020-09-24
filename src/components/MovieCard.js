import React from "react";
import API_KEY from "../config/API-KEY";
import "./css/movie-card.css";

function MovieCard({ movie }) {
  const imgUrl = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
  return (
    <div className="movie-card">
      <img className="movie-card__img" src={imgUrl} alt={movie.title} />
      <p className="movie-card__title">{movie.title}</p>
    </div>
  );
}

export default MovieCard;
