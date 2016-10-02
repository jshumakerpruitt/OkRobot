/*
 *
 * ProfilePage actions
 *
 */

import {
  REQUEST_USER,
  RECEIVE_USER,
  RECEIVE_USER_ERROR,
  FETCH_USER,
} from './constants';

export function requestUser(id) {
  return {
    type: REQUEST_USER,
    id,
  };
}

export function fetchUser(id) {
  return {
    type: FETCH_USER,
    id,
  };
}
export function receiveUser(data) {
  return {
    type: RECEIVE_USER,
    user: data.user,
  };
}

export function receiveUserError(id) {
  return {
    type: RECEIVE_USER_ERROR,
    id,
  };
}
