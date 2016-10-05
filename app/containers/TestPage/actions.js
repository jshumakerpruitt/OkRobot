/*
 *
 * TestPage actions
 *
 */

import {
  SET_CHATROOM,
  SET_CHATROOM_ERROR,
} from './constants';
import {
  SET_CHATROOM_ID,
} from 'containers/ChatBox/constants';

export function setChatroom(partnerId) {
  return {
    type: SET_CHATROOM,
    partnerId,
  };
}

export function setChatroomSuccess(chatroomId) {
  return {
    type: SET_CHATROOM_ID,
    chatroomId,
  };
}
export function SetChatroomError() {
  return {
    type: SET_CHATROOM_ERROR,
  };
}
