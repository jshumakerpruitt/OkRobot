import expect from 'expect';
import userProfileReducer from '../reducer';
import { fromJS } from 'immutable';

describe('userProfileReducer', () => {
  it('returns the initial state', () => {
    expect(userProfileReducer(undefined, {})).toEqual(fromJS({}));
  });
});
