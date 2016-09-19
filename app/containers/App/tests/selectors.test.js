import { fromJS } from 'immutable';
import expect from 'expect';

import {
  selectIsNavOpen,
  selectToken,
  selectGlobal,
  selectCurrentUser,
  selectLoading,
  selectError,
  selectRepos,
  selectLocationState,
} from '../selectors';

describe('selectGlobal', () => {
  const globalSelector = selectGlobal();
  it('should select the global state', () => {
    const globalState = fromJS({});
    const mockedState = fromJS({
      global: globalState,
    });
    expect(globalSelector(mockedState)).toEqual(globalState);
  });
});

describe('selectToken', () => {
  const tokenSelector = selectToken();
  it('should select the token', () => {
    const token = 'mytoken';
    const mockedState = fromJS({
      global: {
        token,
      },
    });
    expect(tokenSelector(mockedState)).toEqual(token);
  });
});

describe('selectIsNavOpen', () => {
  const navSelector = selectIsNavOpen();
  it('should select the nav state', () => {
    const isNavOpen = true;
    const mockedState = fromJS({
      global: {
        isNavOpen,
      },
    });
    expect(navSelector(mockedState)).toEqual(isNavOpen);
  });
});

describe('selectCurrentUser', () => {
  const currentUserSelector = selectCurrentUser();
  it('should select the current user', () => {
    const username = 'mxstbr';
    const mockedState = fromJS({
      global: {
        currentUser: username,
      },
    });
    expect(currentUserSelector(mockedState)).toEqual(username);
  });
});

describe('selectLoading', () => {
  const loadingSelector = selectLoading();
  it('should select the loading', () => {
    const loading = false;
    const mockedState = fromJS({
      global: {
        loading,
      },
    });
    expect(loadingSelector(mockedState)).toEqual(loading);
  });
});

describe('selectError', () => {
  const errorSelector = selectError();
  it('should select the error', () => {
    const error = 404;
    const mockedState = fromJS({
      global: {
        error,
      },
    });
    expect(errorSelector(mockedState)).toEqual(error);
  });
});

describe('selectRepos', () => {
  const reposSelector = selectRepos();
  it('should select the repos', () => {
    const repositories = fromJS([]);
    const mockedState = fromJS({
      global: {
        userData: {
          repositories,
        },
      },
    });
    expect(reposSelector(mockedState)).toEqual(repositories);
  });
});

describe('selectLocationState', () => {
  const locationStateSelector = selectLocationState();
  it('should select the route as a plain JS object', () => {
    const route = fromJS({
      locationBeforeTransitions: null,
    });
    const mockedState = fromJS({
      route,
    });
    expect(locationStateSelector(mockedState)).toEqual(route.toJS());
  });
});
