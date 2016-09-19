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
  SUBMIT_LIKE,
  RECEIVE_LIKE,
  RECEIVE_LIKE_ERROR,
} from './constants';

export function fetchUsers(token) {
  return {
    type: FETCH_USERS,
    token,
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


export function submitLike(id, liked) {
  return {
    type: SUBMIT_LIKE,
    like: { id, liked },
  };
}
export function receiveLike(like) {
  return {
    type: RECEIVE_LIKE,
    like,
  };
}

export function receiveLikeError(error) {
  return {
    type: RECEIVE_LIKE_ERROR,
    error,
  };
}

