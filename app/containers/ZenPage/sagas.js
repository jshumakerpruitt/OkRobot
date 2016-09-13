import { put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { RECEIVE_KOAN, FETCH_KOAN, REQUEST_KOAN } from './constants';
import { requestKoan, receiveKoan } from './actions';

// Individual exports for testing
export function* defaultSaga() {
  return;
}

export function* fetchKoanSaga() {
    yield put(requestKoan());

    const koan = yield fetch('https://api.github.com/zen')
        .then(response => response.text());

    yield put(receiveKoan(koan));
  return;
}

export function* watchFetchZen() {
    yield* takeEvery(FETCH_KOAN, fetchKoanSaga);
}

// All sagas to be loaded
export default [
  defaultSaga,
    watchFetchZen
];
