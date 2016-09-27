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
    default:
      return state;
  }
}

export default appReducer;
