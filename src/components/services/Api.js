async function fetchWithErrorHandling(url = "", config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Not found"));
}

export function fetchMoviesTop() {
  return fetchWithErrorHandling(
    "https://api.themoviedb.org/3/trending/movie/day?api_key=632130da274d6de5764c9929cd146b8b"
  );
}

export function fetchMoviesFind() {
  return fetchWithErrorHandling(
    "https://api.themoviedb.org/3/search/movie?api_key=632130da274d6de5764c9929cd146b8b&language=en-US&page=1&include_adult=false"
  );
}

export function fetchMovieDetails() {
  return fetchWithErrorHandling(
    "https://api.themoviedb.org/3/movie/{movie_id}?api_key=632130da274d6de5764c9929cd146b8b&language=en-US"
  );
}

export function fetchMovieCast() {
  return fetchWithErrorHandling(
    "https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=632130da274d6de5764c9929cd146b8b&language=en-US"
  );
}

export function fetchMovieReview() {
  return fetchWithErrorHandling(
    "https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=632130da274d6de5764c9929cd146b8b&language=en-US&page=1"
  );
}
