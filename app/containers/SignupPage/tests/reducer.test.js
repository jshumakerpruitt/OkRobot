import expect from 'expect';
import signupPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('signupPageReducer', () => {
  it('returns the initial state', () => {
    expect(signupPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
