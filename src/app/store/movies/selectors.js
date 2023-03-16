export function selectMovies(state) {
  return state.movies.data;
}
export function selectMoviesLoading(state) {
  return state.movies.loading;
}
export function selectMoviesError(state) {
  return state.movies.error;
}
