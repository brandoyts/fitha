import React from "react";
import { NavLink } from "react-router-dom";
import "./css/genres.css";

function Genres({ genres }) {
  return (
    <div className="genres">
      <ul>
        {genres && genres.map((genre) => <Genre key={genre.id} data={genre} />)}
      </ul>
    </div>
  );
}

function Genre({ data }) {
  return (
    <li>
      <NavLink to="#">{data.name}</NavLink>
    </li>
  );
}

export default Genres;
