/*
 *
 * VerifyPage actions
 *
 */

import {
  SUBMIT_TOKEN,
  RECEIVE_VERIFY_ERROR,
} from './constants';

export function submitToken(token) {
  return {
    type: SUBMIT_TOKEN,
    token,
  };
}

export function receiveVerifyError(error) {
  return {
    type: RECEIVE_VERIFY_ERROR,
    error,
  };
}
