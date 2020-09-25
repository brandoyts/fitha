import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

function useFetchMovies(category, page) {
  const [movies, setMovies] = useState();

  const fetchMovies = async (category, page) => {
    const url = `https://api.themoviedb.org/3/movie${category}?api_key=${API_KEY}&language=en-US&page=${page}`;

    const { data } = await axios.get(url);

    setMovies([...data.results]);
  };

  useEffect(() => {
    fetchMovies(category, page);
  }, []);

  return { movies, fetchMovies };
}

export default useFetchMovies;
