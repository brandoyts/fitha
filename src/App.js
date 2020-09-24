import API_KEY from "./config/API-KEY.js";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Genres from "./components/Genres";
import MainContent from "./components/MainContent";
import Movies from "./components/Movies";
import "./App.css";

function App() {
  const [genres, setGenres] = useState();
  const [movies, setMovies] = useState();
  const [category, setCategory] = useState("popular");

  //*FETCH GENRES
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
      )
      .then((response) => {
        setGenres(response.data.genres);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Genres genres={genres} />
        <Movies category={category} />
      </div>
    </Router>
  );
}

export default App;
