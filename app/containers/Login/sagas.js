import { call, put, select } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import request from '../../utils/request';
import { receiveError, receiveSuccess } from './actions';
import {
  receiveToken,
  storeCurrentUser,
} from '../App/actions';

import {
  selectToken,
} from '../App/selectors';

import {
  REQUEST_CURRENT_USER,
  API_ENDPOINT,
} from 'containers/App/constants';

import {
  SUBMIT_LOGIN,
} from './constants';

// Individual exports for testing
export function* postAuth(action) {
  // grab form data from the dispatched action
  const auth = action.auth;

  // POST auth data to api
  const response = yield request(
    `${API_ENDPOINT}/user_token.json`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(auth),
    }
  );

  if (response.err) {
    yield put(receiveError(response.err));
  } else {
    yield put(receiveSuccess());
    yield put(receiveToken(response.data.jwt));
    yield call(fetchCurrentUser);
  }
}

export function* fetchCurrentUser() {
  const token = yield select(selectToken());

  const response = yield request(
    `${API_ENDPOINT}/current_user.json`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );

  if (response.err) {
    // TODO: provide specific error action
    yield put(receiveError(response.err));
  } else {
    yield put(storeCurrentUser(response.data.user));
  }
}

export function* watchPostAuth() {
  yield* takeEvery(SUBMIT_LOGIN, postAuth);
}


export function* watchFetchCurrentUser() {
  yield* takeEvery(REQUEST_CURRENT_USER, fetchCurrentUser);
}

// All sagas to be loaded
export default [
  watchPostAuth,
  watchFetchCurrentUser,
];
