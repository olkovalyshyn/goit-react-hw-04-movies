import { useState, useEffect } from "react";
import { NavLink, Link, useRouteMatch, useLocation } from "react-router-dom";

import * as API from "../../components/services/Api";
import FindBar from "../FindBar/FindBar";

export default function FindResult() {
  const [queryInput, setQueryInput] = useState();

  const [moviesSelected, setMoviesSelected] = useState();

  const { url } = useRouteMatch();
  const location = useLocation();

  useEffect(() => {
    if (!queryInput) {
      return [];
      // return console.log("Відсутній запит по пошуку перед рендером");
    }

    API.fetchMoviesFind(queryInput).then(setMoviesSelected);
  }, [location.search, queryInput]);

  return (
    <>
      <FindBar getSearchQuery={setQueryInput} />
      <ul>
        {moviesSelected &&
          moviesSelected.results.map((movie) => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `${url}/${movie.id}`,
                  state: { from: location },
                }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}
