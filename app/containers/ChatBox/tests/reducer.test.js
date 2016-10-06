import expect from 'expect';
import chatBoxReducer from '../reducer';
import { fromJS } from 'immutable';

import {
  receiveMessage,
  receiveMessages,
  setChatroomId,
} from '../actions';

describe('chatBoxReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      chatroomId: null,
      ids: [],
      messages: {},
      cable: null,
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
    const chatroomId = 1;
    const message =
      { id, chatroomId, body: 'message body' };

    const initialState = state.set('chatroomId', chatroomId);

    const expectedState = state
      .mergeIn(['messages', String(id)], message)
      .set('ids', state.get('ids').concat(id))
      .set('chatroomId', chatroomId);

    expect(chatBoxReducer(initialState, receiveMessage(message)))
      .toEqual(expectedState);
  });

  it('should load messages', () => {
    const id1 = 1;
    const id2 = 2;
    const chatroomId = 1;
    const msg1 =
      { id: id1, chatroomId, body: 'message body1' };
    const msg2 =
      { id: id2, chatroomId, body: 'message body2' };
    const messages = [msg1, msg2];

    const initialState = state.set('chatroomId', chatroomId);

    const expectedState = state
      .set('chatroomId', chatroomId)
      .mergeIn(['messages', String(id1)], msg1)
      .mergeIn(['messages', String(id2)], msg2)
      .set('ids', state.get('ids').concat([id1, id2]));

    expect(chatBoxReducer(initialState, receiveMessages(messages)))
      .toEqual(expectedState);
  });
});
