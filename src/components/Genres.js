import React from "react";
import "./css/genres.css";

function Genres({ genres }) {
  return (
    <div className="genres">
      <ul>
        {genres
          ? genres.map((genre) => <Genre key={genre.id} data={genre} />)
          : null}
      </ul>
    </div>
  );
}

function Genre({ data }) {
  return (
    <li>
      <a href="#">{data.name}</a>
    </li>
  );
}

export default Genres;
