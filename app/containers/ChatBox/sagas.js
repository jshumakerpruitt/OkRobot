import { put, select } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';

import request from '../../utils/request';
import { selectToken } from '../App/selectors';
import {
  setChatroomError,
  setChatroomSuccess,
 } from './actions';

import {
  API_ENDPOINT,
} from 'containers/App/constants';

import {
  SET_CHATROOM,
} from './constants';

// Individual exports for testing
export function* submitChatroomRequest(action) {
  // POST user data to api
  const token = yield select(selectToken());
  const response = yield request(
    `${API_ENDPOINT}/chatroom_memberships.json`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ partner_id: action.partnerId }),
    }
  );

  if (response.err) {
    yield put(setChatroomError(response.err));
  } else {
    yield put(setChatroomSuccess(response.data.chatroom_id));
  }
}

export function* watchSetChatroom() {
  yield* takeEvery(SET_CHATROOM, submitChatroomRequest);
}


// All sagas to be loaded
export default [
  watchSetChatroom,
];
