import API_KEY from "./config/API-KEY.js";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Genres from "./components/Genres";
import MainContent from "./components/MainContent";
import "./App.css";

function App() {
  const [genres, setGenres] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
      )
      .then((response) => {
        setGenres(response.data.genres);
        console.log(response.data.genres);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <Genres genres={genres} />
      <MainContent />
    </div>
  );
}

export default App;
