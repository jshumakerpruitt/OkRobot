import { put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import request from '../../utils/request';
import { receiveError, receiveSuccess } from './actions';
import { receiveToken } from '../App/actions';

import {
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
  }
}

export function* watchPostAuth() {
  yield* takeEvery(SUBMIT_LOGIN, postAuth);
}


// All sagas to be loaded
export default [
  watchPostAuth,
];
