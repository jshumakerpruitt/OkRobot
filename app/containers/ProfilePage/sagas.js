import { select, call, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { selectToken } from '../App/selectors';
import request from 'utils/request';

import { FETCH_USER } from './constants';
import { API_ROOT } from 'containers/App/constants';

import {
  requestUser,
  receiveUser,
  receiveUserError,
} from './actions';

// Individual exports for testing
export function* fetchUser(action) {
  const id = action.id;
  yield put(requestUser(id));

  const token = yield select(selectToken());

  const resp = yield call(
    request,
    `${API_ROOT}/users/${id}.json`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );

  if (resp.err) {
    yield put(receiveUserError(resp.err));
  } else {
    yield put(receiveUser(resp.data));
  }
}

export function* watchFetchUser() {
  yield* takeEvery(FETCH_USER, fetchUser);
}

export function* userData() {
  return;
}
// All sagas to be loaded
export default [
  watchFetchUser,
];
