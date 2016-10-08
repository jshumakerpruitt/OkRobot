import expect from 'expect';
import browsePageReducer, { user } from '../reducer';
import { fromJS } from 'immutable';

import {
  receiveLike,
  receiveUsers,
  requestUsers,
  receiveError,
} from '../actions';

describe('browsePageReducer', () => {
  let state = null;

  beforeEach(() => {
    state = fromJS({
      users: {},
      ids: [],
      isFetching: false,
      error: false,
    });
  });

  // initial state
  describe('initial state', () => {
    it('sets users to empty array', () => {
      const nextState = browsePageReducer(undefined, {});
      expect(nextState).toEqual(state);
    });
  });

  describe('REQUEST_USERS', () => {
    let nextState = null;
    beforeEach(() => {
      nextState = browsePageReducer(undefined, requestUsers());
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
    const initialUsers = {
      0: { id: 0, username: 'foo' },
    };

    const receivedUsers = [{
      id: 1,
      username: 'bar',
    }, {
      id: 2,
      username: 'baz',
    }];

    const initialState = fromJS({
      users: initialUsers,
      ids: [0],
      isFetching: true,
      error: false,
    });

    const nextState = browsePageReducer(initialState, receiveUsers(receivedUsers));

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
    it('adds new users', () => {
      expect(nextState.get('users')).toEqual(fromJS({
        1: receivedUsers[0],
        2: receivedUsers[1],
      }));
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

    const nextState = browsePageReducer(initialState, receiveError());

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

describe('RECEIVE_LIKE', () => {
  let state = null;
  let like1 = null;
  let unlike2 = null;

  beforeEach(() => {
    state = fromJS({
      users: {
        1: { id: 1, liked: false, username: 'foo' },
        2: { id: 2, liked: true, username: 'bar' },
      },
      ids: [1, 2],
      isFetching: false,
      error: false,
    });

    like1 = { id: 1, liked: true };
    unlike2 = { id: 2, liked: false };
  });

  it('likes a user', () => {
    const nextState = browsePageReducer(state, receiveLike(like1));
    const expectedState = fromJS({
      users: {
        1: { id: 1, liked: true, username: 'foo' },
        2: { id: 2, liked: true, username: 'bar' },
      },
      ids: [1, 2],
      isFetching: false,
      error: false,
    });
    expect(expectedState).toEqual(nextState);
  });

  it('unlikes a user', () => {
    const expectedState = fromJS({
      users: {
        1: { id: 1, liked: false, username: 'foo' },
        2: { id: 2, liked: false, username: 'bar' },
      },
      ids: [1, 2],
      isFetching: false,
      error: false,
    });

    const nextState = browsePageReducer(state, receiveLike(unlike2));
    expect(expectedState).toEqual(nextState);
  });
});

describe('user', () => {
  let likedUser;
  let unlikedUser;
  let unaffectedUser;
  let like;
  let unlike;

  beforeEach(() => {
    likedUser = fromJS({ id: 1, username: 'foo', liked: true });
    unlikedUser = fromJS({ id: 1, username: 'foo', liked: false });
    unaffectedUser = fromJS({ id: 2, username: 'notfoo', liked: 'notbool' });
    unlike = {
      id: likedUser.get('id'),
      liked: false,
    };
    like = {
      id: unlikedUser.get('id'),
      liked: true,
    };
  });

  it('likes an unliked  user', () => {
    expect(user(unlikedUser, receiveLike(like)))
    .toEqual(likedUser);
  });

  it('unlikes an liked  user', () => {
    expect(user(likedUser, receiveLike(unlike)))
    .toEqual(unlikedUser);
  });

  it('ignores an unaffectedUser (like)', () => {
    expect(user(unaffectedUser, receiveLike(like)))
    .toEqual(unaffectedUser);
  });

  it('ignores an unaffectedUser (unlike)', () => {
    expect(user(unaffectedUser, receiveLike(unlike)))
    .toEqual(unaffectedUser);
  });
});
