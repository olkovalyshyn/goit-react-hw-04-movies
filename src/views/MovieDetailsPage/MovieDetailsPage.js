import {
  generatePath,
  useParams,
  NavLink,
  useRouteMatch,
  Route,
} from "react-router-dom";
import { useState, useEffect } from "react";
import * as API from "../../components/services/Api";

import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";

import styles from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  const { url } = useRouteMatch();

  useEffect(() => {
    API.fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      <nav>
        <NavLink exact to="/">
          {`<= Go back`}
        </NavLink>
      </nav>
      <div className={styles.container}>
        {movie && (
          <div>
            <img src={API.BASE_IMG_URL + movie.poster_path}></img>
          </div>
        )}

        <div className={styles.containerInfo}>
          <h1>{movie.title}</h1>
          <p>
            User score: <span>{movie.vote_average * 10}%</span>
          </p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>

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
