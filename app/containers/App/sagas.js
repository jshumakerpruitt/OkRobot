import { fork, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
// import { push } from 'react-router-redux';
import { REHYDRATE } from 'redux-persist/constants';
// import { selectNextPath } from './selectors';
import {
  RECEIVE_TOKEN,
} from './constants';
import {
  receiveToken,
  storeToken,
} from './actions';

// Individual exports for testing
export function* rehydrate(action) {
  const token = (action.payload.global &&
                action.payload.global.toJS().token) ||
                '';
  if (token.length > 0) {
    yield put(receiveToken(token));
  }
}

export function* processToken(action) {
  const token = action.token || '';

/*
  let nextPath = yield select(selectNextPath()) || '';
  if (nextPath.length === 0) {
    nextPath = '/browse';
  }
*/

  if (token.length > 0) {
    yield put(storeToken(token));
    // yield put(push(nextPath));
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
