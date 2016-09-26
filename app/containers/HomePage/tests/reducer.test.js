import expect from 'expect';
import homeReducer from '../reducer';
import {
  receiveRandomUsers,
} from '../actions';
import { fromJS } from 'immutable';

describe('homeReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      randomUsers: [],
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(homeReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the receiveRandomUsers action correctly', () => {
    const users = [
      { id: 1, username: 'foo' },
      { id: 2, username: 'bar' },
    ];

    const expectedResult = state.set('randomUsers', fromJS(users));

    expect(homeReducer(state, receiveRandomUsers(users))).toEqual(expectedResult);
  });
});
