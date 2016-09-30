/*
 *
 * SignupPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SIGNUP_SUCCESS,
} from './constants';

const initialState = fromJS({
  signupSuccess: null,
});

function signupPageReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return state.set('signupSuccess', action.signupSuccess);
    default:
      return state;
  }
}

export default signupPageReducer;
