// import { take, call, put, select } from 'redux-saga/effects';

// Individual exports for testing
export function* defaultSaga() {
  return;
}

import { watchPostAuth } from 'containers/Login/sagas';
// All sagas to be loaded
export default [
  watchPostAuth,
];
