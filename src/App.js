import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Genres from "./components/Genres";
import Popular from "./components/Popular";
import Upcoming from "./components/Upcoming";
import TopRated from "./components/TopRated";
import useFetchMovies from "./hooks/useFetchMovies";

import "./App.css";

function App() {
  const { genres } = useFetchMovies();

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
