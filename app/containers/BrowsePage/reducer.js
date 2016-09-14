/*
 *
 * BrowsePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  RECEIVE_USERS,
  REQUEST_USERS,
} from './constants';

export const defaultState = fromJS({
  users: [],
  isFetchingUsers: false,
});

export const users = (state = fromJS([]), action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return state.concat(fromJS(action.users));
    default:
      return state;
  }
};

function browsePageReducer(state = defaultState, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return (
        state
        .set('users', users(state.get('users'), action))
        .set('isFetchingUsers', false)
      );
    case REQUEST_USERS:
      return state.set('isFetchingUsers', true);
    default:
      return state;
  }
}

export default browsePageReducer;
