import expect from 'expect';

import {
  FETCH_RANDOM_USERS,
  REQUEST_USERS,
  RECEIVE_USERS,
  RECEIVE_ERROR,
  FETCH_USERS,
  SUBMIT_LIKE,
  RECEIVE_LIKE,
} from '../constants';

import {
  fetchRandomUsers,
  fetchUsers,
  requestUsers,
  receiveUsers,
  receiveError,
  submitLike,
  receiveLike,
} from '../actions';

describe('Home Actions', () => {
  describe('fetchRandomUsers', () => {
    it('should have the correct type', () => {
      const expectedResult = FETCH_RANDOM_USERS;

      expect(fetchRandomUsers().type).toEqual(expectedResult);
    });
  });
});

describe('HomePage actions', () => {
  describe('requestUsers', () => {
    it('has a type of REQUEST_USERS', () => {
      expect(requestUsers().type).toEqual(REQUEST_USERS);
    });
  });

  describe('fetchUsers', () => {
    it('has a type of FETCH_USERS', () => {
      expect(fetchUsers().type).toEqual(FETCH_USERS);
    });
  });

  describe('receiveUsers', () => {
    it('has a type of RECEIVE_USERS', () => {
      expect(receiveUsers([]).type).toEqual(RECEIVE_USERS);
    });

    it('has a List of users', () => {
      const users = {
        1: {
          id: 1,
          username: 'foo',
        },
        2: {
          id: 2,
          username: 'bar',
        } };
      expect(receiveUsers(users).users).toEqual(users);
    });
  });

  describe('receiveError', () => {
    it('has a type of RECEIVE_ERROR', () => {
      expect(receiveError().type).toEqual(RECEIVE_ERROR);
    });
  });

  describe('submitLike', () => {
    it('has a type of SUBMIT_LIKE', () => {
      expect(submitLike().type).toEqual(SUBMIT_LIKE);
    });
  });

  describe('receiveLike', () => {
    it('has a type of RECEIVE_LIKE', () => {
      expect(receiveLike().type).toEqual(RECEIVE_LIKE);
    });
  });
/*
  describe('receiveLikeError', () => {
    it('has a type of RECEIVE_LIKE_ERROR', () => {
      expect(receiveLikeError().type).toEqual(RECEIVE_LIKE_ERROR);
    });
  });
*/
});
