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
  REVOKE_TOKEN,
  LOAD_REPOS,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR,
  SET_REDIRECT,
} from './constants';

import { push } from 'react-router-redux';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadRepos() {
  return {
    type: LOAD_REPOS,
  };
}

/**
 * store the received  token
 *
 * @return {object} An action object with a type of
   RECEIVE_TOKEN and a token
 */
export function receiveToken(token) {
  return {
    type: RECEIVE_TOKEN,
    token,
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

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function reposLoaded(repos, username) {
  return {
    type: LOAD_REPOS_SUCCESS,
    repos,
    username,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function repoLoadingError(error) {
  return {
    type: LOAD_REPOS_ERROR,
    error,
  };
}

export const goToNow = (path) =>
  push(path);

export const setRedirect = (path) => ({
  type: SET_REDIRECT,
  path,
});

export const openNav = () => ({
  type: OPEN_NAV,
});

export const closeNav = () => ({
  type: CLOSE_NAV,
});
