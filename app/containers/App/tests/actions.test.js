import expect from 'expect';

import {
  LOAD_REPOS,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR,
  RECEIVE_TOKEN,
  REVOKE_TOKEN,
  SET_REDIRECT,
} from '../constants';

import { CALL_HISTORY_METHOD } from 'react-router-redux';

import {
  loadRepos,
  reposLoaded,
  repoLoadingError,
  receiveToken,
  revokeToken,
  setRedirect,
  goToNow,
} from '../actions';

describe('App Actions', () => {
  describe('receiveToken', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: RECEIVE_TOKEN,
        token: 'mytoken',
      };

      expect(receiveToken('mytoken')).toEqual(expectedResult);
    });
  });

  describe('revokeToken', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: REVOKE_TOKEN,
      };

      expect(revokeToken()).toEqual(expectedResult);
    });
  });

  describe('goToNow', () => {
    it('should return the correct type', () => {
      expect(goToNow().type).toEqual(CALL_HISTORY_METHOD);
    });

    it('should return the correct args', () => {
      const path = '/login';
      const args = goToNow(path).payload.args;
      expect(args).toEqual(['/login']);
    });
  });

  describe('setRedirect', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: SET_REDIRECT,
        path: '/browse',
      };

      expect(setRedirect('/browse')).toEqual(expectedResult);
    });
  });

  describe('loadRepos', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_REPOS,
      };

      expect(loadRepos()).toEqual(expectedResult);
    });
  });

  describe('reposLoaded', () => {
    it('should return the correct type and the passed repos', () => {
      const fixture = ['Test'];
      const username = 'test';
      const expectedResult = {
        type: LOAD_REPOS_SUCCESS,
        repos: fixture,
        username,
      };

      expect(reposLoaded(fixture, username)).toEqual(expectedResult);
    });
  });

  describe('repoLoadingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOAD_REPOS_ERROR,
        error: fixture,
      };

      expect(repoLoadingError(fixture)).toEqual(expectedResult);
    });
  });
});
