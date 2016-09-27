import expect from 'expect';
import chatBoxReducer from '../reducer';
import { fromJS } from 'immutable';

describe('chatBoxReducer', () => {
  it('returns the initial state', () => {
    expect(chatBoxReducer(undefined, {})).toEqual(fromJS({}));
  });
});
