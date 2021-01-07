import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as API from "../components/services/Api";

export default function MovieDetailsPage() {
  const { movie, setMovie } = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    API.fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  // useEffect(() => {
  //   API.fetchMovieDetails(movieId).then((response) => setMovie(response));
  // }, [movieId]);

  // useEffect(() => {
  //   API.fetchMovieDetails(movieId).then((response) =>
  //     console.log("!!!response", response)
  //   );
  // }, [movieId]);

  console.log("!!!response", movie);
  console.log("!!!movie", movie);
  console.log(
    "!!!API.fetchMovieDetails(movieId)",
    API.fetchMovieDetails(movieId)
  );

  return (
    <>
      <p>Тут буде деталізація одного фільма під ІД {movieId}</p>
      {/* <p>{movie.title}</p> */}
    </>
  );
}
