import { useState, useEffect } from "react";
import API from "../services/Api";

export default function HomePage() {
  const [topMovies, setTopMovies] = useState(null);

  useEffect(() => {
    API.fetchMoviesTop().then(setTopMovies);
  }, []);

  return <p>!!! Here must be TOP of the movies</p>;
}
