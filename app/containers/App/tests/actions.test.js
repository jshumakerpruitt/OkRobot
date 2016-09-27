import expect from 'expect';

import {
  OPEN_NAV,
  CLOSE_NAV,
  RECEIVE_TOKEN,
  REVOKE_TOKEN,
} from '../constants';

import { CALL_HISTORY_METHOD } from 'react-router-redux';

import {
  openNav,
  closeNav,
  receiveToken,
  revokeToken,
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

  describe('Open Nav', () => {
    it('it has type OPEN_NAV', () => {
      const expected = {
        type: OPEN_NAV,
      };
      expect(openNav()).toEqual(expected);
    });
  });

  describe('Close Nav', () => {
    it('it has type CLOSE_NAV', () => {
      const expected = {
        type: CLOSE_NAV,
      };
      expect(closeNav()).toEqual(expected);
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
});
