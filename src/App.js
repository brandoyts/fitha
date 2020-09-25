import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Genres from "./components/Genres";
import Popular from "./components/Popular";
import Upcoming from "./components/Upcoming";
import TopRated from "./components/TopRated";
import "./App.css";

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [genres, setGenres] = useState();

  //*FETCH GENRES
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
      )
      .then((response) => {
        setGenres(response.data.genres);
      })
      .catch((err) => {});
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Genres genres={genres} />
        <Switch>
          <Route path="/popular" component={Popular} />
          <Route path="/top_rated" component={TopRated} />
          <Route path="/upcoming" component={Upcoming} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
