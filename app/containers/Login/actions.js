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
} from './constants';

import { RECEIVE_TOKEN } from '../App/constants';

export function submitLogin(authHash) {
  return {
    type: SUBMIT_LOGIN,
    auth: { auth: authHash },
  };
}

export function receiveSuccess(token) {
  return {
    type: RECEIVE_TOKEN,
    token,
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
