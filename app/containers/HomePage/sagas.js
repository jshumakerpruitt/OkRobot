/**
 *  random user data from api
 */

import { take, call, put, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { FETCH_RANDOM_USERS } from './constants';
import { API_ENDPOINT } from 'containers/App/constants';

import request from 'utils/request';

import {
  receiveRandomUsers,
  receiveError,
} from './actions';

/**
 * make api request to non-secured route of api
 */
export function* fetchRandomUsers() {
  const requestURL = `${API_ENDPOINT}/random.json`;

  // Call our request helper (see 'utils/request')
  const randomUsers = yield call(request, requestURL,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

    }
  );

  if (!randomUsers.err) {
    yield put(receiveRandomUsers(randomUsers.data));
  } else {
    yield put(receiveError(randomUsers.err));
  }
}

/**
 * Watches for FETCH_RANDOM_USERS action and calls handler
 */
export function* fetchRandomUsersWatcher() {
  while (yield take(FETCH_RANDOM_USERS)) {
    yield call(fetchRandomUsers);
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* randomUserData() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(fetchRandomUsersWatcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  randomUserData,
];
