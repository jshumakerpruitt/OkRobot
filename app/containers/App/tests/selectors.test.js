import { fromJS } from 'immutable';
import expect from 'expect';

import {
  selectIsNavOpen,
  selectToken,
  selectGlobal,
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
