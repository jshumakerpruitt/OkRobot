/*
 *
 * ChatBox actions
 *
 */

import {
  SET_CHATROOM_ID,
  RECEIVE_MESSAGE,
  SET_CHATROOM,
  SET_CHATROOM_ERROR,
  SET_SUBSCRIPTION,
} from './constants';

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

export function setChatroomError() {
  return {
    type: SET_CHATROOM_ERROR,
  };
}
export function setChatroomId(chatroomId) {
  return {
    type: SET_CHATROOM_ID,
    chatroomId,
  };
}

export function setSubscription(subscription) {
  return {
    type: SET_SUBSCRIPTION,
    subscription,
  };
}

export function receiveMessage(message) {
  return {
    type: RECEIVE_MESSAGE,
    message,
    id: message.id,
  };
}
