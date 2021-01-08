export const BASE_IMG_URL = "https://image.tmdb.org/t/p/w342/";

async function fetchWithErrorHandling(url = "", config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Not found"));
}

export function fetchMoviesTop() {
  return fetchWithErrorHandling(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=632130da274d6de5764c9929cd146b8b`
  );
}

export function fetchMoviesFind(query) {
  return fetchWithErrorHandling(
    `https://api.themoviedb.org/3/search/movie?api_key=632130da274d6de5764c9929cd146b8b&language=en-US&query=${query}&page=1&include_adult=false`
  );
}

export function fetchMovieDetails(movieId) {
  return fetchWithErrorHandling(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=632130da274d6de5764c9929cd146b8b&language=en-US`
  );
}

export function fetchMovieCast(movieId) {
  return fetchWithErrorHandling(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=632130da274d6de5764c9929cd146b8b&language=en-US`
  );
}

export function fetchMovieReview(movieId) {
  return fetchWithErrorHandling(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=632130da274d6de5764c9929cd146b8b&language=en-US&page=1`
  );
}
