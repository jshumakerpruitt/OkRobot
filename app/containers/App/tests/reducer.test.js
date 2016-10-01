import expect from 'expect';
import appReducer from '../reducer';
import {
  storeToken,
  revokeToken,
  openNav,
  closeNav,
} from '../actions';
import { fromJS } from 'immutable';

describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      isNavOpen: false,
      token: '',
      nextPath: '',
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('it should nullify token on revokeToken', () => {
    const initialState = state.set('token', 'mytoken');
    const expectedState = state;

    expect(appReducer(initialState, revokeToken()))
      .toEqual(expectedState);
  });

  it('it should open the NavDrawer', () => {
    const expectedState = state.set('isNavOpen', true);

    expect(appReducer(state, openNav()))
      .toEqual(expectedState);
  });

  it('it should close the NavDrawer', () => {
    const expectedState = state.set('isNavOpen', false);

    expect(appReducer(state, closeNav()))
      .toEqual(expectedState);
  });

  it('should set the token on storeToken', () => {
    const token = 'receivetoken';
    const expectedState = state.set('token', token);

    expect(appReducer(state, storeToken(token)))
    .toEqual(expectedState);
  });
});
