/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import {
  SUBMIT_LOGIN,
  RECEIVE_ERROR,
  RECEIVE_SUCCESS,
  UPDATE_EMAIL,
  UPDATE_PASSWORD,
  SET_REDIRECT,
  RECEIVE_TOKEN,
  REVOKE_TOKEN,
  OPEN_NAV,
  CLOSE_NAV,
} from './constants';
import { fromJS } from 'immutable';
import { REHYDRATE } from 'redux-persist/constants';

// The initial state of the App

const initialState = fromJS({
  isNavOpen: false,
  token: '',
  loading: false,
  error: false,
  currentUser: false,
  auth: fromJS({
    email: '',
    password: '',
  }),
  redirectPath: '',
  isSubmitting: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case REHYDRATE:
      return action.payload.global || state;
    case RECEIVE_TOKEN:
      return state
        .set('token', action.token);
    case REVOKE_TOKEN:
      return state
        .set('token', '');
    case OPEN_NAV:
      return state
        .set('isNavOpen', true);
    case CLOSE_NAV:
      return state
        .set('isNavOpen', false);
    case SET_REDIRECT:
      return state
        .set('redirectPath', action.path);
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

export default appReducer;
