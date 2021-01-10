import { useState, useEffect } from "react";
import { Link, useRouteMatch, useHistory, useLocation } from "react-router-dom";
import * as API from "../services/Api";

export default function HomePage() {
  const [topMovies, setTopMovies] = useState(null);
  const match = useRouteMatch();
  const history = useHistory();
  const location = useLocation();

  // console.log("!!!useRouteMatch", match);
  // console.log("!!!history", history);
  // console.log("!!!location", location);
  useEffect(() => {
    API.fetchMoviesTop().then((request) => setTopMovies(request.results));
  }, []);

  return (
    <>
      {topMovies &&
        topMovies.map((movie) => (
          <ul key={movie.id}>
            <Link
              to={{
                pathname: `/movies/${movie.id}`,
                state: { from: location },
              }}
            >
              {movie.title}
            </Link>
          </ul>
        ))}
    </>
  );
}
