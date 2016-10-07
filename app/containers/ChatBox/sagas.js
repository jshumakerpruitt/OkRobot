import { call, fork, take, cancel, put, select } from 'redux-saga/effects';
import { takeLatest, takeEvery } from 'redux-saga';
import { LOCATION_CHANGE } from 'react-router-redux';

import ActionCable from 'actioncable';

import request, { getOptions } from '../../utils/request';
import {
  selectToken,
} from '../App/selectors';
import {
  requestMessages,
  receiveMessages,
  setChatroomError,
  setChatroomSuccess,
  receiveCable,
 } from './actions';

import {
  API_ROOT,
  SOCKET_URL,
} from 'containers/App/constants';

import {
  SET_CHATROOM,
  REQUEST_MESSAGES,
  REQUEST_CABLE,
} from './constants';

// Individual exports for testing
export function* submitChatroomRequest(action) {
  // POST user data to api
  const token = yield select(selectToken());
  const response = yield request(
    `${API_ROOT}/chatroom_memberships.json`,
    getOptions({
      token,
      body: { partner_id: action.partnerId },
      method: 'POST',
    })
  );

  if (response.err) {
    yield put(setChatroomError(response.err));
  } else {
    yield put(requestMessages(response.data.chatroomId));
    yield put(setChatroomSuccess(response.data.chatroomId));
  }
}

export function* watchSetChatroom() {
  yield* takeEvery(SET_CHATROOM, submitChatroomRequest);
}

export function* chatroomData() {
  const watcher = yield fork(watchSetChatroom);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* createCable(action) {
  const cable = ActionCable.createConsumer(
    `${SOCKET_URL}?token=${action.token}`
  );
  yield put(receiveCable(cable));
}

export function* watchRequestCable() {
  yield* takeEvery(REQUEST_CABLE, createCable);
}

export function* cableData() {
  const watcher = yield fork(watchRequestCable);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* fetchMessages(action) {
  const url = `${API_ROOT}/chatrooms/${action.chatroomId}.json`;
  const token = yield select(selectToken());
  const response = yield call(request, url, getOptions({ token }));

  if (response.err) {
    yield put({ type: 'FETCH_MESSAGES_ERROR', error: response.err });
  } else {
    yield put(receiveMessages(response.data.messages));
  }
}

export function* watchFetchMessages() {
  yield* takeLatest(REQUEST_MESSAGES, fetchMessages);
}

export function* messagesData() {
  const watcher = yield fork(watchFetchMessages);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// All sagas to be loaded
export default [
  chatroomData,
  cableData,
  messagesData,
];
