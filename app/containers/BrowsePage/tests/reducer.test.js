import expect from 'expect';
import browsePageReducer from '../reducer';
import { fromJS } from 'immutable';

import {
  RECEIVE_USERS,
  REQUEST_USERS,
} from '../constants';

describe('browsePageReducer', () => {
  describe('initial state', () => {
    it('sets users to empty array', () => {
      const nextState = browsePageReducer(undefined, {});
      expect(nextState.get('users')).toEqual(fromJS([]));
    });

    it('sets isFetchingUsers to false', () => {
      const nextState = browsePageReducer(undefined, {});
      expect(nextState.get('isFetchingUsers')).toEqual(false);
    });
  });


  describe('REQUEST_USERS', () => {
    const action = { type: REQUEST_USERS };

    it('sets isFetchingUsers to true before fetching', () => {
      const nextState = browsePageReducer(undefined, action);
      expect(nextState.get('isFetchingUsers'))
        .toEqual(true);
    });
  });

  describe('RECEIVE_USERS', () => {
    const receivedUsers = [{
      id: 1,
      username: 'bar',
    }, {
      id: 2,
      username: 'baz',
    }];

    const initialUsers = [{
      id: 0, username: 'foo',
    }];

    const initialState = fromJS({
      users: initialUsers,
      isFetchingUsers: true,
    });
    const action = { type: RECEIVE_USERS, users: receivedUsers };
    const nextState = browsePageReducer(initialState, action);

    it('sets isFetchingUsers to false', () => {
      expect(nextState.get('isFetchingUsers'))
        .toEqual(false);
    });

    it('adds new users to end of array', () => {
      expect(nextState.get('users')).toEqual(fromJS([
        ...initialUsers,
        ...receivedUsers,
      ]));
    });
  });
});
