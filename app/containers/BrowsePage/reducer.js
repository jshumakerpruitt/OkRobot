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
} from './constants';

export const defaultState = fromJS({
  users: [],
  isFetching: false,
  error: false,
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
        state.set('isFetching', false)
             .set('users',
                  users(state.get('users'), action))
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
    default:
      return state;
  }
}

export default browsePageReducer;
