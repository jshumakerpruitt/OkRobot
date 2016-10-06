/*
 * App Actions
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
  OPEN_NAV,
  CLOSE_NAV,
  RECEIVE_TOKEN,
  STORE_TOKEN,
  REVOKE_TOKEN,
  SET_NEXT_PATH,
  STORE_CURRENT_USER,
} from './constants';

/**
 * store the received  token
 *
 * @return {object} An action object with a type of
   RECEIVE_TOKEN and a token
 */

// important to have a default value here
// if token is ever set to null the app becomes
// unusable until local storage is deleted
export function receiveToken(token = '') {
  return {
    type: RECEIVE_TOKEN,
    token,
  };
}

export function storeToken(token = '') {
  return {
    type: STORE_TOKEN,
    token,
  };
}

export function storeCurrentUser(currentUser) {
  return {
    type: STORE_CURRENT_USER,
    currentUser,
  };
}
/**
 * set the existing token to empty string
 *
 * @return {object} An action object with a type of
   REVOKE_TOKEN
 */
export function revokeToken() {
  return {
    type: REVOKE_TOKEN,
  };
}

export const setNextPath = (nextPath) => ({
  type: SET_NEXT_PATH,
  nextPath,
});

export const openNav = () => ({
  type: OPEN_NAV,
});

export const closeNav = () => ({
  type: CLOSE_NAV,
});
