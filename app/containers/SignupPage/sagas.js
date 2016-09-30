// import { take, call, put, select } from 'redux-saga/effects';
import { put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import request from '../../utils/request';
import { receiveSignupError, receiveSignupSuccess } from './actions';

import {
  API_ENDPOINT,
} from 'containers/App/constants';

import {
  SUBMIT_FORM,
} from './constants';

// Individual exports for testing
export function* postAuth(action) {
  // POST user data to api
  const response = yield request(
    `${API_ENDPOINT}/users.json`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: action.user }),
    }
  );

  if (response.err) {
    yield put(receiveSignupError(response.err));
  } else {
    yield put(receiveSignupSuccess(action.user.email));
  }
}

export function* watchPostAuth() {
  yield* takeEvery(SUBMIT_FORM, postAuth);
}


// All sagas to be loaded
export default [
  watchPostAuth,
];
