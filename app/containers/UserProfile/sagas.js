import { call, put, select } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { push } from 'react-router-redux';
import request, { getOptions } from 'utils/request';
import {
  selectToken,
  selectCurrentUser,
} from 'containers/App/selectors';

import { API_ROOT } from 'containers/App/constants';

import {
  DELETE_USER,
  REQUEST_CURRENT_USER,
} from './constants';

import {
  revokeToken,
} from 'containers/App/actions';

import {
  receiveCurrentUserProfile,
} from './actions';

// Delete account
export function* requestDelete() {
  const token = yield select(selectToken());

  const response = yield call(
    request,
    `${API_ROOT}/users/1`,
    getOptions({
      method: 'DELETE',
      token,
    })
  );

  if (!response.err) {
    yield put(revokeToken());
    yield put(push('/login'));
  }
}

export function* watchRequestDelete() {
  yield* takeEvery(DELETE_USER, requestDelete);
}

// Fetch Current User

export function* fetchCurrentUser() {
  const token = yield select(selectToken());
  const id = yield select(selectCurrentUser());

  const response = yield call(
    request,
    `${API_ROOT}/users/${id}`,
    getOptions({ token })
  );

  if (!response.err) {
    yield put(receiveCurrentUserProfile(response.data.user));
  }
}

export function* watchRequestCurrentUser() {
  yield* takeEvery(REQUEST_CURRENT_USER, fetchCurrentUser);
}

// All sagas to be loaded
export default [
  watchRequestDelete,
  watchRequestCurrentUser,
];
