/*
 *
 * UserProfile actions
 *
 */

import {
  DELETE_USER,
  REQUEST_CURRENT_USER,
  RECEIVE_CURRENT_USER_PROFILE,
} from './constants';

export function deleteUser(token) {
  return {
    type: DELETE_USER,
    token,
  };
}

export function requestCurrentUser() {
  return {
    type: REQUEST_CURRENT_USER,
  };
}

export function receiveCurrentUserProfile(currentUserProfile) {
  return {
    type: RECEIVE_CURRENT_USER_PROFILE,
    currentUserProfile,
  };
}
