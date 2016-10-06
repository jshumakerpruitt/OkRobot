import { call, put, select } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import request, { getOptions } from '../../utils/request';
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
  API_ROOT,
} from 'containers/App/constants';

import {
  SUBMIT_LOGIN,
} from './constants';

// Individual exports for testing
export function* postAuth(action) {
  // grab form data from the dispatched action
  const auth = action.auth;

  // POST auth data to api
  const response = yield call(
    request,
    `${API_ROOT}/user_token.json`,
    getOptions({ method: 'POST', body: auth }),
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
    `${API_ROOT}/current_user.json`,
    getOptions({ token }),
  );

  if (response.err) {
    // TODO: provide specific error action
    yield put({ type: 'CURRENT_USER_ERROR', error: response.err });
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
