import expect from 'expect';
import {
  receiveMessage,
  setChatroomId,
} from '../actions';
import {
  RECEIVE_MESSAGE,
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
