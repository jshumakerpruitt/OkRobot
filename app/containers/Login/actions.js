/*
 *
 * Login actions
 *
 */

import {
  SUBMIT_LOGIN,
  RECEIVE_ERROR,
  UPDATE_EMAIL,
  UPDATE_PASSWORD,
  RECEIVE_SUCCESS,
} from 'containers/App/constants';

export function submitLogin(authHash, redirectPath) {
  return {
    type: SUBMIT_LOGIN,
    auth: { auth: authHash },
    redirectPath,
  };
}

export function receiveSuccess() {
  return {
    type: RECEIVE_SUCCESS,
  };
}

export function receiveError() {
  return {
    type: RECEIVE_ERROR,
  };
}

export function updateEmail(email) {
  return {
    type: UPDATE_EMAIL,
    email,
  };
}

export function updatePassword(password) {
  return {
    type: UPDATE_PASSWORD,
    password,
  };
}
