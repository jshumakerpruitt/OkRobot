/*
 *
 * ZenPage actions
 *
 */

import {
  DEFAULT_ACTION,
  REQUEST_KOAN,
  FETCH_KOAN,
  RECEIVE_KOAN,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function receiveKoan(koan) {
    return {
        type: RECEIVE_KOAN,
        koan: koan
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
