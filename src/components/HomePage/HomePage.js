import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as API from "../services/Api";

export default function HomePage() {
  const [topMovies, setTopMovies] = useState(null);

  useEffect(() => {
    API.fetchMoviesTop().then((request) => setTopMovies(request.results));
  }, []);

  return (
    <>
      {topMovies &&
        topMovies.map((movie) => (
          <ul key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </ul>
        ))}
    </>
  );
}
