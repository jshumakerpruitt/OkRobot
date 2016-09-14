import { put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { API_ENDPOINT } from '../App/constants';
import { FETCH_USERS } from './constants';
import {
  requestUsers,
  receiveUsers,
} from './actions';

// Individual exports for testing
export function* fetchUsersSaga() {
  yield put(requestUsers());

  const users = yield fetch(
    API_ENDPOINT,
  ).then(response => response.json())
   .then(json => json.users);

  yield put(receiveUsers(users));
}

export function* watchFetchUsers() {
  yield* takeEvery(FETCH_USERS, fetchUsersSaga);
}

// All sagas to be loaded
export default [
  watchFetchUsers,
];
