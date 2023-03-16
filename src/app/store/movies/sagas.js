import movieService from "../../services/MovieService";
import { getMovies, setMovies } from "./slice";
import { call, put, takeLatest } from "redux-saga/effects";

function* handleGetMovies(action) {
  try {
    const movies = yield call(movieService.getMovies);
    yield put(setMovies(movies.data));
  } catch (error) {
    alert(error.message);
  }
}
export function* watchGetMovies() {
  yield takeLatest(getMovies.type, handleGetMovies);
}
