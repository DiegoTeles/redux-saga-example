import { call, put, takeLatest } from "redux-saga/effects";
import { userSuccess, userFailure } from "./action";
import * as service from "./service";

import { UserTypes } from "./types";

export function* watchGetUser() {
  console.log("Ai vem pro Saga Watch");
  yield takeLatest(UserTypes.SYSTEM, getUser);
}

export function* getUser(data) {
  console.log("Que chama a Saga Get");
  try {
    const response = yield call(service.getUser, data);
    return yield put(userSuccess(response));
  } catch (error) {
    return yield put(userFailure(error.message));
  }
}
