import expect from 'expect';
import verifyPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('verifyPageReducer', () => {
  it('returns the initial state', () => {
    expect(verifyPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
