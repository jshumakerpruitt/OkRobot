/*
 *
 * BrowsePage actions
 *
 */

import { normalize } from 'normalizr';
import * as schema from '../../utils/schema';
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
export const receiveUsers = (users) => {
  const resp = normalize(users, schema.arrayOfUsers);
  return {
    type: RECEIVE_USERS,
    users: resp.entities.users,
    ids: resp.result,
  };
};

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

