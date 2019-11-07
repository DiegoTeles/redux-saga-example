import { all } from "redux-saga/effects";
import { watchGetUser } from "./users/saga";

export default function* rootSaga() {
  return yield all([watchGetUser()]);
}
