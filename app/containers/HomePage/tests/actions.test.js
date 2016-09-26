import expect from 'expect';

import {
  FETCH_RANDOM_USERS,
} from '../constants';

import {
  fetchRandomUsers,
} from '../actions';

describe('Home Actions', () => {
  describe('fetchRandomUsers', () => {
    it('should have the correct type', () => {
      const expectedResult = FETCH_RANDOM_USERS;

      expect(fetchRandomUsers().type).toEqual(expectedResult);
    });
  });
});
