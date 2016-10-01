import { call, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';

import request from 'utils/request';

import { FETCH_USER } from './constants';

import {
  requestUser,
  receiveUser,
  receiveUserError,
} from './actions';

// Individual exports for testing
export function* fetchUser(id) {
  yield put(requestUser(id));

  const resp = yield call(
    request,
    `API_ENDPOINT/users/${id}.json`
  );

  if (resp.err) {
    yield put(receiveUserError(resp.err));
  } else {
    yield put(receiveUser(resp.data));
  }
}

export function* watchFetchUser() {
  yield* takeEvery(FETCH_USER, fetchUser);
}

export function* userData() {
  return;
}
// All sagas to be loaded
export default [
  watchFetchUser,
];
