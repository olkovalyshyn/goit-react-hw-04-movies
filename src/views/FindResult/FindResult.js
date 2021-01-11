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
    if (queryInput) {
      localStorage.setItem("QueryInputForGoBack", queryInput);
    }
  }, [queryInput]);

  // useEffect(() => {
  //   queryInput
  //     ? API.fetchMoviesFind(queryInput).then(setMoviesSelected)
  //     : API.fetchMoviesFind(localStorage.getItem("QueryInputForGoBack")).then(
  //         setMoviesSelected
  //       );
  // }, [queryInput]);

  // useEffect(() => {
  //   queryInput
  //     ? API.fetchMoviesFind(queryInput).then(setMoviesSelected)
  //     : localStorage.getItem("QueryInputForGoBack")
  //     ? API.fetchMoviesFind(localStorage.getItem("QueryInputForGoBack")).then(
  //         setMoviesSelected
  //       )
  //     : API.fetchMoviesFind(0).then(setMoviesSelected);
  // }, [queryInput]);

  useEffect(() => {
    const fetchLocalStorage = () => {
      if (localStorage.getItem("QueryInputForGoBack") === null) {
        return;
      } else
        API.fetchMoviesFind(localStorage.getItem("QueryInputForGoBack")).then(
          setMoviesSelected
        );
    };

    queryInput
      ? API.fetchMoviesFind(queryInput).then(setMoviesSelected)
      : fetchLocalStorage();
  }, [queryInput]);

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
