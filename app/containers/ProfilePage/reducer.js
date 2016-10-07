/*
 *
 * ProfilePage reducer
 *
 */

import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { users, ids } from 'containers/BrowsePage/reducer';
import {
//  REQUEST_USER,
//  RECEIVE_USER,
//  RECEIVE_USER_ERROR,
} from './constants';
import {
  RECEIVE_LIKE,
  RECEIVE_USER,
  } from 'containers/BrowsePage/constants';

const initialState = fromJS({
  user: fromJS({
    username: '',
    age: '',
    id: '',
    liked: false,
  }),
});

function user(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_USER:
      return state.set('user', action.user);
    case RECEIVE_LIKE:
      return state.set('user', user(state.get('user')));
    default:
      return state;
  }
}

const profilePageReducer = combineReducers({
  users,
  ids,
  user,
});
export default profilePageReducer;
