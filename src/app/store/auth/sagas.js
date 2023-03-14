import { put, call, takeLatest } from "redux-saga/effects";
import authService from "../../services/AuthService";

import { register, setActiveUser, setToken } from "./slice";

function* handleRegister(action) {
  try {
    const data = yield call(authService.register, action.payload);
    yield put(setToken(data.authorisation.token));
    yield put(setActiveUser(data.user));
  } catch (error) {
    alert("Invalid input data");
    console.error(error);
  }
}

export function* watchRegister() {
  yield takeLatest(register.type, handleRegister);
}
