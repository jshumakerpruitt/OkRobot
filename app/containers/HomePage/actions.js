/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your appliction state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */
import { normalize } from 'normalizr';
import * as schema from 'utils/schema';
import {
  REQUEST_USERS,
  REQUEST_RANDOM_USERS,
  RECEIVE_USERS,
  RECEIVE_ERROR,
  FETCH_USERS,
  FETCH_RANDOM_USERS,
  SUBMIT_LIKE,
  RECEIVE_LIKE,
  RECEIVE_LIKE_ERROR,
} from './constants';

export function fetchUsers(params) {
  return {
    type: FETCH_USERS,
    params,
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
    users: resp.entities.users || {},
    ids: resp.result,
  };
};

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

export function fetchRandomUsers() {
  return {
    type: FETCH_RANDOM_USERS,
  };
}

export function requestRandomUsers() {
  return {
    type: REQUEST_RANDOM_USERS,
  };
}

export function receiveError(error) {
  return {
    type: RECEIVE_ERROR,
    error,
  };
}
