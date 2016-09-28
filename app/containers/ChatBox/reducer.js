/*
 *
 * ChatBox reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SET_CHATROOM_ID,
  RECEIVE_MESSAGE,
} from './constants';

const initialState = fromJS({
  chatroomId: null,
  ids: [],
  messages: {},
});

function chatBoxReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CHATROOM_ID:
      return state
        .set('chatroomId', action.chatroomId);
    case RECEIVE_MESSAGE:
      return state
        .mergeIn(['messages', String(action.id)], action.message)
        .set('ids', state.get('ids').concat(action.id));
    default:
      return state;
  }
}

export default chatBoxReducer;
