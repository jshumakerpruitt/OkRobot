/*
import expect from 'expect';
import loginReducer from '../reducer';
import { fromJS } from 'immutable';

import {
  receiveError,
  receiveSuccess,
  submitLogin,
  updateEmail,
  updatePassword,
} from '../actions';

import { setRedirect } from '../../App/actions';

describe('loginReducer', () => {
  let state = null;

  beforeEach(() => {
    state = fromJS({
      auth: fromJS({
        email: '',
        password: '',
      }),
      redirectPath: '',
      error: false,
      isSubmitting: false,
    });
  });

  it('returns the initial state', () => {
    expect(loginReducer(undefined, {})).toEqual(state);
  });

  it('sets error to true on receiveError', () => {
    expect(loginReducer(state, receiveError()).get('error'))
    .toEqual(true);
  });

  it('should set the redirectPath on setRedirect', () => {
    const redirectPath = '/mycoolpath';
    const expectedState = state.set('redirectPath', redirectPath);

    expect(loginReducer(state, setRedirect(redirectPath)))
    .toEqual(expectedState);
  });

  it('sets isSubmitting to true on submitLogin', () => {
    const expectedState = state.set('isSubmitting', true);
    expect(loginReducer(state, submitLogin()))
    .toEqual(expectedState);
  });

  it('sets error to false on submitLogin', () => {
    expect(loginReducer(state, submitLogin()).get('error'))
    .toEqual(false);
  });

  it('sets isSubmitting to false on receiveSuccess', () => {
    state = state.set('isSubmitting', true);
    const expectedState = state.set('isSubmitting', false);

    expect(loginReducer(state, receiveSuccess()))
    .toEqual(expectedState);
  });

  it('updates email on updateEmail', () => {
    const newEmail = 'newemail';
    const expectedState = state
      .setIn(['auth', 'email'], newEmail);

    expect(loginReducer(state, updateEmail(newEmail)))
      .toEqual(expectedState);
  });

  it('updates password on updateEmail', () => {
    const newPassword = 'newpassword';
    const expectedState = state
      .setIn(['auth', 'password'], newPassword);

    expect(loginReducer(state.isRequired, updatePassword(newPassword)))
      .toEqual(expectedState);
  });
});
*/
