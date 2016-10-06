import { fork, take, cancel, put, select } from 'redux-saga/effects';
import { takeLatest, takeEvery } from 'redux-saga';
import { LOCATION_CHANGE } from 'react-router-redux';

import ActionCable from 'actioncable';

import request from '../../utils/request';
import {
  selectToken,
} from '../App/selectors';
import {
  selectCable,
} from 'containers/TestPage/selectors';
import {
  setChatroomError,
  setChatroomSuccess,
  receiveCable,
  receiveSubscription,
 } from './actions';

import {
  API_ENDPOINT,
} from 'containers/App/constants';

import {
  SET_CHATROOM,
  REQUEST_CABLE,
  REQUEST_SUBSCRIPTION,
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

export function* chatroomData() {
  const watcher = yield fork(watchSetChatroom);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* createCable(action) {
  const cable = ActionCable.createConsumer(
    `ws://localhost:4000/cable?token=${action.token}`
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

export function* createSubscription(action) {
  const cable = yield select(selectCable());

  const subscription = cable.subscriptions.create(
    'ChatroomsChannel', {
      received: (data) => {
        action.receiveMessage(data.message);
      },
    }
  );

  yield put(receiveSubscription(subscription));
}

export function* watchRequestSubscription() {
  yield* takeLatest(REQUEST_SUBSCRIPTION, createSubscription);
}

export function* subscriptionData() {
  const watcher = yield fork(watchRequestSubscription);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}


// All sagas to be loaded
export default [
  chatroomData,
  cableData,
  subscriptionData,
];
