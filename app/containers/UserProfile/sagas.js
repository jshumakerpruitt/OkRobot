import { take, call, put, select } from 'redux-saga/effects';
import request, { getOptions } from 'utils/request';
import { selectToken } from 'containers/App/selectors';
import { API_ROOT } from 'containers/App/constants';
import { DELETE_USER } from './constants';

// Individual exports for testing
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

  if (response.err) {
    console.log(response.err);
  } else {
    console.log(response.data);
  }
}

export function* watchRequestDelete() {
  yield* takeEvery(DELETE_USER, requestDelete);
}

// All sagas to be loaded
export default [
  watchRequestDelete,
];
