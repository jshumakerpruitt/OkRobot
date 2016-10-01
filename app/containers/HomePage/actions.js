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
import {
  FETCH_RANDOM_USERS,
  REQUEST_RANDOM_USERS,
  RECEIVE_RANDOM_USERS,
  RECEIVE_ERROR,
} from './constants';

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

export function receiveRandomUsers(randomUsers) {
  return {
    type: RECEIVE_RANDOM_USERS,
    randomUsers,
  };
}

export function receiveError(error) {
  return {
    type: RECEIVE_ERROR,
    error,
  };
}
