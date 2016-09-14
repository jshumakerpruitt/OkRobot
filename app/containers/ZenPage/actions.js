/*
 *
 * ZenPage actions
 *
 */

import {
  REQUEST_KOAN,
  FETCH_KOAN,
  RECEIVE_KOAN,
} from './constants';

export function receiveKoan(koan) {
  return {
    type: RECEIVE_KOAN,
    koan,
  };
}

export function requestKoan() {
  return {
    type: REQUEST_KOAN,
  };
}

export function fetchKoan() {
  return {
    type: FETCH_KOAN,
  };
}
