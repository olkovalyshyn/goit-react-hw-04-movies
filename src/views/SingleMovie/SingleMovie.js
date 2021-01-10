import { useState } from "react";
import {
  NavLink,
  useRouteMatch,
  useParams,
  Route,
  useHistory,
  useLocation,
} from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./SingleMovie.module.css";
import * as API from "../../components/services/Api";
import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";

export default function SingleMovie({ movie }) {
  const { url } = useRouteMatch();
  const { movieId } = useParams();
  const history = useHistory();
  const location = useLocation();

  // console.log("!!!location SECOND", location);
  // console.log("!!!history SECOND", history);

  const onGoBack = () => {
    history.push(location?.state?.from ?? "/");
  };

  return (
    <>
      <div>
        <nav>
          <button type="button" onClick={onGoBack}>
            go back
          </button>
          {/* <NavLink exact to="/">
            {`<= Go back`}
          </NavLink> */}
        </nav>
        <div className={styles.container}>
          {movie && (
            <div>
              <img src={API.BASE_IMG_URL + movie.poster_path} width="300"></img>
            </div>
          )}

          <div className={styles.containerInfo}>
            {movie && <h1>{movie.title}</h1>}
            <p>
              User score:
              {movie && <span>{movie.vote_average * 10}%</span>}
            </p>
            <h3>Overview</h3>
            {movie && <p>{movie.overview}</p>}
            {movie && <h3>Genres</h3>}

            {movie.genres && (
              <ul>
                {movie.genres.map((genre) => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <hr />

        <ul>
          Additional information
          <li>
            <NavLink to={`${url}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`${url}/reviews`}>Reviews</NavLink>
          </li>
        </ul>
      </div>
      <hr />

      <Route path={`/movies/${movieId}/cast`}>
        <Cast movieId={movieId} />
      </Route>

      <Route path={`/movies/${movieId}/reviews`}>
        <Reviews movieId={movieId} />
      </Route>
    </>
  );
}

SingleMovie.propTypes = {
  movie: PropTypes.array,
};
