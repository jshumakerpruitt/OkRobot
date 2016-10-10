/*
 *
 * Login reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SUBMIT_LOGIN,
  RECEIVE_ERROR,
  RECEIVE_SUCCESS,
  UPDATE_EMAIL,
  UPDATE_PASSWORD,
} from './constants';

const initialState = fromJS({
  auth: fromJS({
    email: '',
    password: '',
  }),
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_LOGIN:
      return state
        .set('isSubmitting', true)
        .set('error', false);
    case RECEIVE_ERROR:
      return state
        .set('error', true)
        .set('isSubmitting', false);
    case RECEIVE_SUCCESS:
      return state
        .set('error', false)
        .set('isSubmitting', false);
    case UPDATE_EMAIL:
      return state.setIn(['auth', 'email'],
                         action.email);
    case UPDATE_PASSWORD:
      return state.setIn(['auth', 'password'],
                         action.password);
    default:
      return state;
  }
}

export default loginReducer;
