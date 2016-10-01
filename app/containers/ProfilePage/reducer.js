/*
 *
 * ProfilePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
//  REQUEST_USER,
  RECEIVE_USER,
//  RECEIVE_USER_ERROR,
} from './constants';

const initialState = fromJS({
  user: {
    username: '',
    age: '',
  },
});

function profilePageReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_USER:
      return state.set('user', action.user);
    default:
      return state;
  }
}

export default profilePageReducer;
