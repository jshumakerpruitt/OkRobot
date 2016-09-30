/*
 *
 * SignupPage actions
 *
 */

import {
  DEFAULT_ACTION,
  SUBMIT_FORM,
  SIGNUP_ERROR,
  SIGNUP_SUCCESS,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function submitForm(json) {
  return {
    type: SUBMIT_FORM,
    user: json,
  };
}

export const receiveSignupError = (error) => ({
  type: SIGNUP_ERROR,
  error,
});

export const receiveSignupSuccess = (email) => ({
  type: SIGNUP_SUCCESS,
  signupSuccess: email,
});
