import { useState, useEffect } from "react";
import { NavLink, Link, useRouteMatch } from "react-router-dom";

import * as API from "../../components/services/Api";
import FindBar from "../FindBar/FindBar";
import SingleMovie from "../SingleMovie/SingleMovie";

export default function FindResult() {
  const [queryInput, setQueryInput] = useState();
  const [moviesSelected, setMoviesSelected] = useState();
  const { url } = useRouteMatch();

  // console.log("!!!queryInput in FindResult", queryInput);

  useEffect(() => {
    if (!queryInput) {
      return [];
      // return console.log("Відсутній запит по пошуку перед рендером");
    }

    API.fetchMoviesFind(queryInput).then(setMoviesSelected);
  }, [queryInput]);
  // console.log("!!!moviesSelected", moviesSelected);
  return (
    <>
      <FindBar getSearchQuery={setQueryInput} />
      <ul>
        {moviesSelected &&
          moviesSelected.results.map((movie) => (
            <li key={movie.id}>
              <Link to={`${url}/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
      </ul>

      {/* <SingleMovie movie={moviesSelected} /> */}
    </>
  );
}
