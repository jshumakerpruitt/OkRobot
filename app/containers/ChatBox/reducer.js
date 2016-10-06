/*
 *
 * ChatBox reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SET_CHATROOM_ID,
  RECEIVE_MESSAGE,
  RECEIVE_CABLE,
  RECEIVE_SUBSCRIPTION,
} from './constants';

const initialState = fromJS({
  chatroomId: null,
  ids: [],
  messages: {},
  cable: null,
});

const messages = (
  state = fromJS({}),
  action
) => {
  switch (action.type) {
    case RECEIVE_MESSAGE:
      return state.set(String(action.id), fromJS(action.message));
    default:
      return state;
  }
};

const ids = (
  state = fromJS([]),
  action
) => {
  switch (action.type) {
    case RECEIVE_MESSAGE:
      return state.concat(action.id);
    default:
      return state;
  }
};

function chatBoxReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CHATROOM_ID:
      return state
        .set('chatroomId', action.chatroomId);
    case RECEIVE_MESSAGE:
      return state.get('chatroomId') === action.message.chatroomId ?
             state
               .set('messages', messages(state.get('messages'), action))
               .set('ids', ids(state.get('ids'), action)) :
             state;
    case RECEIVE_CABLE:
      return state
        .set('cable', action.cable);
    case RECEIVE_SUBSCRIPTION:
      return state
        .set('subscription', action.subscription);
    default:
      return state;
  }
}

export default chatBoxReducer;
