import expect from 'expect';
import zenPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('zenPageReducer', () => {
  it('returns the initial state', () => {
    expect(zenPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
