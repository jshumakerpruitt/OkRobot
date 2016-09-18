import { put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { API_ENDPOINT } from '../App/constants';
import { FETCH_USERS } from './constants';
import request from '../../utils/request';
import {
  requestUsers,
  receiveUsers,
  receiveError,
} from './actions';

// Individual exports for testing
export function* fetchUsersSaga(action) {
  yield put(requestUsers());

  const users = yield request(
    `${API_ENDPOINT}/users`,
    {
      headers: {
        Authorization: `Bearer ${action.token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );

  if (users.err) {
    yield put(receiveError(users.error));
  } else {
    yield put(receiveUsers(users.data.users));
  }
}

export function* watchFetchUsers() {
  yield* takeEvery(FETCH_USERS, fetchUsersSaga);
}

// All sagas to be loaded
export default [
  watchFetchUsers,
];
