/*
 *
 * ChatBox actions
 *
 */

import {
  SET_CHATROOM_ID,
  REQUEST_CABLE,
  RECEIVE_CABLE,
  REQUEST_SUBSCRIPTION,
  RECEIVE_SUBSCRIPTION,
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

export function requestCable(token) {
  return {
    type: REQUEST_CABLE,
    token,
  };
}

export function receiveCable(cable) {
  return {
    type: RECEIVE_CABLE,
    cable,
  };
}

export function requestSubscription(cb) {
  return {
    type: REQUEST_SUBSCRIPTION,
    receiveMessage: cb,
  };
}

export function receiveSubscription(subscription) {
  return {
    type: RECEIVE_SUBSCRIPTION,
    subscription,
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
