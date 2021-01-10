import { useState, useEffect } from "react";

import * as API from "../../components/services/Api";

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState();

  useEffect(
    () =>
      API.fetchMovieReview(movieId).then((response) =>
        setReviews(response.results)
      ),
    [movieId]
  );

  return (
    <>
      {reviews ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3> <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h2>"We don`t have any review for this movie."</h2>
      )}
    </>
  );
}
