/*
 *
 * BrowsePage actions
 *
 */

import {
  REQUEST_USERS,
  RECEIVE_USERS,
  RECEIVE_ERROR,
  FETCH_USERS,
} from './constants';

export function fetchUsers() {
  return {
    type: FETCH_USERS,
  };
}

export function requestUsers() {
  return {
    type: REQUEST_USERS,
  };
}
export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function receiveError(error) {
  return {
    type: RECEIVE_ERROR,
    error,
  };
}

