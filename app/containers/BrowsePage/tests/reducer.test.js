import expect from 'expect';
import browsePageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('browsePageReducer', () => {
  it('returns the initial state', () => {
    expect(browsePageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
