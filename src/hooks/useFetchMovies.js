import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

function useFetchMovies(category, page) {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  // *FETCH MOVIES
  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchMovies = async (category, page) => {
      const url = `https://api.themoviedb.org/3/movie${
        category ? category : "/popular"
      }?api_key=${API_KEY}&language=en-US&page=${page ? page : 1}`;

      axios
        .get(url, { cancelToken: source.token })
        .then((response) => {
          const data = response.data.results;

          setMovies((prev) => [...prev, ...data]);
        })
        .catch((err) => {
          return;
        });
    };

    fetchMovies(category, page);

    return () => {
      source.cancel();
    };
  }, [page, category]);

  // *FETCH GENRES
  useEffect(() => {
    const fetchGenres = async () => {
      const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;
      const { data } = await axios.get(url);

      setGenres(data.genres);
    };
    fetchGenres();
  }, []);

  return { movies, genres };
}

export default useFetchMovies;
