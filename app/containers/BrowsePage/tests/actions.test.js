import expect from 'expect';
import {
  fetchUsers,
  requestUsers,
  receiveUsers,
} from '../actions';
import {
  REQUEST_USERS,
  RECEIVE_USERS,
  FETCH_USERS,
} from '../constants';

describe('BrowsePage actions', () => {
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
      expect(receiveUsers().type).toEqual(RECEIVE_USERS);
    });

    it('has a List of users', () => {
      const users = [{
        id: 1,
        username: 'foo',
      }, {
        id: 2,
        username: 'bar',
      }];
      expect(receiveUsers(users).users).toEqual(users);
    });
  });
});
