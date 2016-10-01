/*
 *
 * ProfilePage actions
 *
 */

import {
  REQUEST_USER,
  RECEIVE_USER,
  RECEIVE_USER_ERROR,
} from './constants';

export function requestUser(id) {
  return {
    type: REQUEST_USER,
    id,
  };
}

export function receiveUser(id) {
  return {
    type: RECEIVE_USER,
    id,
  };
}

export function receiveUserError(id) {
  return {
    type: RECEIVE_USER_ERROR,
    id,
  };
}
