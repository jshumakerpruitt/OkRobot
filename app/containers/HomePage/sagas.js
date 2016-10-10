/**
 *  random user data from api
 */
import { cancel, take, fork, select, call, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';

import { LOCATION_CHANGE } from 'react-router-redux';

import {
  API_ROOT,
} from 'containers/App/constants';

import {
  FETCH_USERS,
  SUBMIT_LIKE,
  FETCH_RANDOM_USERS,
} from './constants';

import request, { getOptions } from 'utils/request';

import {
  requestUsers,
  receiveUsers,
  receiveError,
  receiveLike,
} from './actions';

import { selectToken } from 'containers/App/selectors';

import { watchPostAuth } from 'containers/Login/sagas';

/**
 * make api request to non-secured route of api
 */
export function* fetchRandomUsers() {
  // Call our request helper (see 'utils/request')
  const randomUsers = yield call(
    request,
    `${API_ROOT}/random.json`,
    getOptions(),
  );

  if (!randomUsers.err) {
    yield put(receiveUsers(randomUsers.data));
  } else {
    yield put(receiveError(randomUsers.err));
  }
}

/**
 * Watches for FETCH_RANDOM_USERS action and calls handler
 */
export function* fetchRandomUsersWatcher() {
  yield takeEvery(FETCH_RANDOM_USERS, fetchRandomUsers);
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


const buildQstring = (params = {}) => {
  let result = '?';
  if (params.gender) {
    result += `gender=${params.gender}&`;
  }

  if (params.minAge) {
    result += `minAge=${params.minAge}&`;
  }

  if (params.maxAge) {
    result += `maxAge=${params.maxAge}&`;
  }
  return result.length > 1 ? result : '';
};

// Individual exports for testing
export function* fetchUsersSaga(action) {
  yield put(requestUsers());

  const token = yield select(selectToken());
  const qString = buildQstring(action.params);

  const users = yield call(
    request,
    `${API_ROOT}/users${qString}`,
    getOptions({ token }),
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

export function* userData() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(watchFetchUsers);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

/**
* User Likes
*
*/
export function* submitLikeSaga(action) {
  // optimistically update the UI
  // action shape: {
  //    type: RECEIVE_LIKE,
  //    like: {id: 1, liked: true}
  //  }
  yield put(receiveLike(action.like));

  const token = yield select(selectToken());

  // POST like data to api
  const response = yield call(
    request,
    `${API_ROOT}/user_likes.json`,
    getOptions({ token, body: action.like, method: 'POST' }),
  );

  // if api call failed, reverse change made to UI
  if (response.err) {
    yield put(receiveLike({
      id: action.like.id,
      liked: !action.like.liked,
    }));
  }
}

export function* watchSubmitLike() {
  yield* takeEvery(SUBMIT_LIKE, submitLikeSaga);
}

export function* likeData() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(watchSubmitLike);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  randomUserData,
  watchPostAuth,
  userData,
  likeData,
];
