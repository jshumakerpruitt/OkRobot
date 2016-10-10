/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import login from 'containers/Login/reducer';
import { combineReducers } from 'redux-immutable';

import {
  RECEIVE_USERS,
  RECEIVE_USER,
  RECEIVE_ERROR,
  REQUEST_USERS,
  RECEIVE_LIKE,
} from './constants';

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

export const ids = (
  state = fromJS([]),
  action
) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return fromJS(action.ids);
    case RECEIVE_USER:
      return state.concat(action.user.id);
    default:
      return state;
  }
};

export const users = (state = fromJS({}), action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return fromJS(action.users);
    case RECEIVE_USER:
      return state.set(
        String(action.user.id),
        fromJS(action.user)
      );
    case RECEIVE_LIKE:
      return byId(state, action);
    default:
      return state;
  }
};

export const error = (
  state = false,
  action
) => {
  switch (action.type) {
    case RECEIVE_ERROR:
      return true;
    case REQUEST_USERS:
      return false;
    case RECEIVE_USERS:
      return false;
    default:
      return state;
  }
};

export const isFetching = (
  state = false,
  action
) => {
  switch (action.type) {
    case RECEIVE_ERROR:
      return false;
    case REQUEST_USERS:
      return true;
    case RECEIVE_USERS:
      return false;
    default:
      return state;
  }
};


export default combineReducers({
  login,
  users,
  ids,
  isFetching,
  error,
});
