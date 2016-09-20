import { cancel, take, fork, select, call, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { API_ENDPOINT } from '../App/constants';
import { LOCATION_CHANGE } from 'react-router-redux';
import { selectToken } from '../App/selectors';
import {
  FETCH_USERS,
  SUBMIT_LIKE,
} from './constants';
import request from '../../utils/request';
import {
  requestUsers,
  receiveUsers,
  receiveError,
  receiveLike,
} from './actions';

// Individual exports for testing
export function* fetchUsersSaga() {
  yield put(requestUsers());

  const token = yield select(selectToken());

  const users = yield request(
    `${API_ENDPOINT}/users`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
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
  yield takeEvery(FETCH_USERS, fetchUsersSaga);
}


export function* userData() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(watchFetchUsers);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

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
    `${API_ENDPOINT}/user_likes.json`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(action.like),
    }
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
  yield takeEvery(SUBMIT_LIKE, submitLikeSaga);
}

export function* likeData() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(watchSubmitLike);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}


// All sagas to be loaded
export default [
  userData,
  likeData,
];
