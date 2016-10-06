import expect from 'expect';

import {
  requestMessages,
  receiveMessage,
  receiveMessages,
  setChatroomId,
} from '../actions';
import {
  REQUEST_MESSAGES,
  RECEIVE_MESSAGE,
  RECEIVE_MESSAGES,
  SET_CHATROOM_ID,
} from '../constants';

describe('chatbox actions', () => {
  describe('receiveMessage', () => {
    const msgId = 1;
    let msg;

    beforeEach(() => {
      msg = { id: 1, body: 'foo' };
    });

    it('has the correct shape', () => {
      const expected = {
        type: RECEIVE_MESSAGE,
        message: msg,
        id: msgId,
      };
      expect(receiveMessage(msg)).toEqual(expected);
    });
  });

  describe('requestMessages', () => {
    const chatroomId = 1;

    it('it has the correct shape', () => {
      const expected = {
        type: REQUEST_MESSAGES,
        chatroomId,
      };
      expect(requestMessages(chatroomId)).toEqual(expected);
    });
  });


  describe('receiveMessages', () => {
    const msg1 = { id: 1, body: 'foo' };
    const msg2 = { id: 2, body: 'bar' };
    const msgs = [msg1, msg2];

    it('normalizes the response', () => {
      const expected = {
        type: RECEIVE_MESSAGES,
        messages: { 1: msg1, 2: msg2 },
        ids: [1, 2],
      };
      expect(receiveMessages(msgs)).toEqual(expected);
    });
  });


  describe('set chatroom id', () => {
    const chatroomId = 1;

    it('has the correct shape', () => {
      const expected = {
        type: SET_CHATROOM_ID,
        chatroomId,
      };
      expect(setChatroomId(chatroomId)).toEqual(expected);
    });
  });
});
