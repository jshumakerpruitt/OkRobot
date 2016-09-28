/*
 *
 * ChatBox actions
 *
 */

import {
  SET_CHATROOM_ID,
  RECEIVE_MESSAGE,
} from './constants';

export function setChatroomId(chatroomId) {
  return {
    type: SET_CHATROOM_ID,
    chatroomId,
  };
}

export function receiveMessage(message) {
  return {
    type: RECEIVE_MESSAGE,
    message,
    id: message.id,
  };
}
