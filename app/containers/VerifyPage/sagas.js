import { call, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { push } from 'react-router-redux';
import request, { getOptions } from 'utils/request';
import { API_ROOT } from 'containers/App/constants';
import {
  SUBMIT_TOKEN,
} from './constants';

import {
  receiveVerifyError,
} from './actions';
import {
  receiveToken,
} from 'containers/App/actions';

// Individual exports for testing
export function* sendToken(action) {
  // TODO: change this to use POST
  const response = yield call(
    request,
    `${API_ROOT}/verify?token=${action.token}`,
    getOptions()
  );

  if (response.err) {
    yield put(receiveVerifyError(response.err));
  } else if (response.data.jwt) {
    yield put(receiveToken(response.data.jwt));
    yield put(push('/'));
  } else {
    yield put(receiveVerifyError(response.data.error));
  }
}

export function* watchSendToken() {
  yield* takeEvery(SUBMIT_TOKEN, sendToken);
}
// All sagas to be loaded
export default [
  watchSendToken,
];
