import expect from 'expect';
import chatBoxReducer from '../reducer';
import { fromJS } from 'immutable';

import {
  receiveMessage,
  setChatroomId,
} from '../actions';

describe('chatBoxReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      chatroomId: null,
      ids: [],
      messages: {},
    });
  });

  it('returns the initial state', () => {
    expect(chatBoxReducer(undefined, {})).toEqual(state);
  });

  it('sets the chat room', () => {
    const chatroomId = 1;
    const expectedState = state.set('chatroomId', chatroomId);
    expect(chatBoxReducer(state, setChatroomId(chatroomId)))
      .toEqual(expectedState);
  });

  it('should add a message to the messages hash', () => {
    const id = 1;
    const message =
      { id, body: 'message body' };

    const expectedState = state
      .mergeIn(['messages', String(id)], message)
      .set('ids', state.get('ids').concat(id));

    expect(chatBoxReducer(state, receiveMessage(message)))
      .toEqual(expectedState);
  });
});
