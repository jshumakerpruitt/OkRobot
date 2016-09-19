import expect from 'expect';
import appReducer from '../reducer';
import {
  loadRepos,
  reposLoaded,
  repoLoadingError,
  receiveToken,
  revokeToken,
  setRedirect,
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
      loading: false,
      error: false,
      currentUser: false,
      userData: fromJS({
        repositories: false,
      }),
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

  it('should set the token on receiveToken', () => {
    const token = 'receivetoken';
    const expectedState = state.set('token', token);

    expect(appReducer(state, receiveToken(token)))
    .toEqual(expectedState);
  });

  it('should NOT respond to setRedirect', () => {
    expect(appReducer(state, setRedirect('newpath')))
    .toEqual(state);
  });

  it('should handle the loadRepos action correctly', () => {
    const expectedResult = state
      .set('loading', true)
      .set('error', false)
      .setIn(['userData', 'repositories'], false);

    expect(appReducer(state, loadRepos())).toEqual(expectedResult);
  });

  it('should handle the reposLoaded action correctly', () => {
    const fixture = [{
      name: 'My Repo',
    }];
    const username = 'test';
    const expectedResult = state
      .setIn(['userData', 'repositories'], fixture)
      .set('loading', false)
      .set('currentUser', username);

    expect(appReducer(state, reposLoaded(fixture, username))).toEqual(expectedResult);
  });

  it('should handle the repoLoadingError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = state
      .set('error', fixture)
      .set('loading', false);

    expect(appReducer(state, repoLoadingError(fixture))).toEqual(expectedResult);
  });
});
