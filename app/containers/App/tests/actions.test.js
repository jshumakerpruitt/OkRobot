import expect from 'expect';

import {
  OPEN_NAV,
  CLOSE_NAV,
  RECEIVE_TOKEN,
  REVOKE_TOKEN,
} from '../constants';

import {
  openNav,
  closeNav,
  receiveToken,
  revokeToken,
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
});
