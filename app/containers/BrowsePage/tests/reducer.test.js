import expect from 'expect';
import browsePageReducer from '../reducer';
import { fromJS } from 'immutable';

import {
  RECEIVE_USERS,
  RECEIVE_ERROR,
  REQUEST_USERS,
} from '../constants';

describe('browsePageReducer', () => {
  describe('initial state', () => {
    // users
    it('sets users to empty array', () => {
      const nextState = browsePageReducer(undefined, {});
      expect(nextState.get('users')).toEqual(fromJS([]));
    });

    // isFetching
    it('sets isFetching to false', () => {
      const nextState = browsePageReducer(undefined, {});
      expect(nextState.get('isFetching')).toEqual(false);
    });

    // error
    it('sets error to false', () => {
      const nextState = browsePageReducer(undefined, {});
      expect(nextState.get('error')).toEqual(false);
    });
  });

  describe('REQUEST_USERS', () => {
    const action = { type: REQUEST_USERS };
    let nextState = null;
    beforeEach(() => {
      nextState = browsePageReducer(undefined, action);
    });

    it('sets isFetching to true before fetching', () => {
      expect(nextState.get('isFetching'))
        .toEqual(true);
    });

    it('sets isFetching to true before fetching', () => {
      expect(nextState.get('error'))
        .toEqual(false);
    });
  });

  describe('RECEIVE_USERS', () => {
    const initialUsers = [{
      id: 0, username: 'foo',
    }];

    const receivedUsers = [{
      id: 1,
      username: 'bar',
    }, {
      id: 2,
      username: 'baz',
    }];

    const initialState = fromJS({
      users: initialUsers,
      isFetching: true,
      error: false,
    });

    const action = { type: RECEIVE_USERS, users: receivedUsers };
    const nextState = browsePageReducer(initialState, action);

    // isFetching
    it('sets isFetching to false', () => {
      expect(nextState.get('isFetching'))
        .toEqual(false);
    });

    // isFetching
    it('does not change the error state', () => {
      expect(nextState.get('error'))
        .toEqual(false);
    });

    // users
    it('adds new users to end of array', () => {
      expect(nextState.get('users')).toEqual(fromJS([
        ...initialUsers,
        ...receivedUsers,
      ]));
    });
  });

  describe('RECEIVE_ERROR', () => {
    const initialUsers = [{
      id: 0, username: 'foo',
    }];

    const initialState = fromJS({
      users: initialUsers,
      isFetching: true,
      error: false,
    });

    const action = {
      type: RECEIVE_ERROR,
      users: 'error message',
    };

    const nextState = browsePageReducer(initialState, action);

    // isFetching
    it('sets isFetching to false', () => {
      expect(nextState.get('isFetching'))
        .toEqual(false);
    });

    // users
    it('does not change the users list', () => {
      expect(nextState.get('users'))
        .toEqual(initialState.get('users'));
    });

    // error
    it('sets the error state', () => {
      expect(nextState.get('error'))
      .toEqual(true);
    });
  });
});
