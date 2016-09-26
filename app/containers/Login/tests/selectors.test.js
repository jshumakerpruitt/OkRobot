/*
import { fromJS } from 'immutable';
import expect from 'expect';

import {
  selectLogin,
  selectAuth,
  selectError,
  selectIsSubmitting,
  selectLoginDomain,
  selectEmail,
  selectPassword,
  selectRedirectPath,
} from '../selectors';

describe('selectLoginPage', () => {
  const loginSelector = selectLoginDomain();
  expect(loginSelector(fromJS({ login: 1 }))).toEqual(1);
});

describe('selectLoginPage1', () => {
  const loginPageSelector = selectLogin();
  it('should select the root state for the loginPage', () => {
    const expectedState = { foo: 1 };
    const mockedState = fromJS({
      login: fromJS(expectedState),
    });
    expect(loginPageSelector(mockedState)).toEqual(expectedState);
  });
});

describe('selectRedirectPath', () => {
  const redirectPathSelector = selectRedirectPath();
  it('should select the redirectPath', () => {
    const redirectPath = '/browse';
    const mockedState = fromJS({
      login: {
        redirectPath,
      },
    });
    expect(redirectPathSelector(mockedState)).toEqual(redirectPath);
  });
});

describe('selectAuth', () => {
  const authSelector = selectAuth();
  it('should select the auth state for the login page', () => {
    const expectedState = { foo: 1 };
    const mockedState = fromJS({
      login: {
        auth: expectedState,
      },
    });
    expect(authSelector(mockedState)).toEqual(expectedState);
  });
});

describe('selectError', () => {
  const errorSelector = selectError();
  it('should select the error state for the login page', () => {
    const expectedState = { foo: 1 };
    const mockedState = fromJS({
      login: {
        error: expectedState,
      },
    });
    expect(errorSelector(mockedState)).toEqual(expectedState);
  });
});

describe('selectIsSubmitting', () => {
  const isSubmittingSelector = selectIsSubmitting();
  it('should select the isSubmitting state for the login page', () => {
    const expectedState = { foo: 1 };
    const mockedState = fromJS({
      login: {
        isSubmitting: expectedState,
      },
    });
    expect(isSubmittingSelector(mockedState)).toEqual(expectedState);
  });
});

describe('selectEmail', () => {
  const emailSelector = selectEmail();
  it('should select the email state', () => {
    const expectedState = 'anyemail';
    const mockedState = fromJS({
      login: {
        auth: { email: expectedState },
      },
    });
    expect(emailSelector(mockedState)).toEqual(expectedState);
  });
});

describe('selectPassword', () => {
  const passwordSelector = selectPassword();
  it('should select the password state', () => {
    const expectedState = 'anypassword';
    const mockedState = fromJS({
      login: {
        auth: { password: expectedState },
      },
    });
    expect(passwordSelector(mockedState)).toEqual(expectedState);
  });
});
*/
