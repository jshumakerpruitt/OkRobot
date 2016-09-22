/*
 *
 * BrowsePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  RECEIVE_USERS,
  RECEIVE_ERROR,
  REQUEST_USERS,
  RECEIVE_LIKE,
} from './constants';

export const defaultState = fromJS({
  users: {},
  ids: [],
  isFetching: false,
  error: false,
});

export const user = (
  state = fromJS({}),
  action,
) => {
  switch (action.type) {
    case RECEIVE_LIKE:
      return action.like.id === state.get('id') ?
             state.set('liked', action.like.liked) :
             state;
    default:
      return state;
  }
};

const byId = (
  state = fromJS({}),
  action
) => {
  switch (action.type) {
    case RECEIVE_LIKE:
      return (
        state.set(String(action.like.id),
                  user(state.get(String(action.like.id)), action))
      );
    default:
      return state;
  }
};

const allIds = (
  state = fromJS([]),
  action
) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return state.concat(fromJS(action.ids));
    default:
      return state;
  }
};

export const users = (state = fromJS({}), action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return state.merge(fromJS(action.users));
    case RECEIVE_LIKE:
      return byId(state, action);
    default:
      return state;
  }
};

function browsePageReducer(state = defaultState, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return (
        state.set('isFetching', false)
             .set('users',
                  users(state.get('users'), action))
             .set('ids',
                  allIds(state.get('ids'), action))
      );
    case RECEIVE_ERROR:
      return (
        state.set('error', true)
             .set('isFetching', false)
      );
    case REQUEST_USERS:
      return (
        state.set('isFetching', true)
             .set('error', false)
      );
    case RECEIVE_LIKE:
      return (
        state.set('users',
                  users(state.get('users'), action))
      );
    default:
      return state;
  }
}

export default browsePageReducer;
