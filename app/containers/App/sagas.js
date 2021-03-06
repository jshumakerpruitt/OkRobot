import { select, fork, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { push } from 'react-router-redux';
import { REHYDRATE } from 'redux-persist/constants';
import { selectNextPath } from './selectors';
import {
  RECEIVE_TOKEN,
} from './constants';
import {
  receiveToken,
  storeToken,
  storeCurrentUser,
  setNextPath,
} from './actions';

export function retrieveFromPayload(key, action) {
  return (action.payload.global &&
          action.payload.global.toJS()[key]);
}

// Individual exports for testing
export function* rehydrate(action) {
  const token = retrieveFromPayload('token', action);
  const currentUser = retrieveFromPayload('currentUser', action);

  if (token) {
    yield put(receiveToken(token));
  }

  if (currentUser) {
    yield put(storeCurrentUser(currentUser));
  }
}

export function* processToken(action) {
  const token = action.token || '';
  const nextPath = yield select(selectNextPath());

  if (token.length > 0) {
    yield put(storeToken(token));
    if (nextPath.length > 0) {
      yield put(push(nextPath));
      yield put(setNextPath(''));
    }
  }
}

export function* watchRehydrate() {
  yield* takeEvery(REHYDRATE, rehydrate);
}

export function* watchReceiveToken() {
  yield* takeEvery(RECEIVE_TOKEN, processToken);
}

// All sagas to be loaded
export default function* appSaga() {
  yield [
    fork(watchReceiveToken),
    fork(watchRehydrate),
  ];
}
