import { put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { API_ENDPOINT } from '../App/constants';
import { FETCH_USERS } from './constants';
import request from '../../utils/request';
import {
  requestUsers,
  receiveUsers,
  receiveUsersError,
} from './actions';

// Individual exports for testing
export function* fetchUsersSaga() {
  yield put(requestUsers());

  const users = yield request(
    API_ENDPOINT,
    {}
  );

  if (users.err) {
    yield put(receiveUsersError(users.error));
  } else {
    yield put(receiveUsers(users.data));
  }
}

export function* watchFetchUsers() {
  yield* takeEvery(FETCH_USERS, fetchUsersSaga);
}

// All sagas to be loaded
export default [
  watchFetchUsers,
];
