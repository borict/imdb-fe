import { put, call, takeLatest } from "redux-saga/effects";
import authService from "../../services/AuthService";

import { register, setActiveUser, setToken, setError } from "./slice";

function* handleRegister(action) {
  try {
    const data = yield call(authService.register, action.payload);
    yield put(setToken(data.authorisation.token));
    yield put(setActiveUser(data.user));
    yield put(setError(null));
    window.location.replace("/movies");
  } catch (error) {
    if (error.response.data.errors.email) {
      yield put(setError(error.response.data.message));
    }
    console.error(error);
  }
}

export function* watchRegister() {
  yield takeLatest(register.type, handleRegister);
}
