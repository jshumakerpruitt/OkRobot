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
  STORE_TOKEN,
  REVOKE_TOKEN,
  OPEN_NAV,
  CLOSE_NAV,
  SET_NEXT_PATH,
} from './constants';

import { LOCATION_CHANGE } from 'react-router-redux';

import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  isNavOpen: false,
  token: '',
  nextPath: '',
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_NEXT_PATH:
      return state.set('nextPath', action.nextPath);
    case LOCATION_CHANGE:
      return state.set('isNavOpen', false);
    case STORE_TOKEN:
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
