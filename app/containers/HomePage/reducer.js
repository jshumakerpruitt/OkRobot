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

import {
  RECEIVE_RANDOM_USERS,
} from './constants';

import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  randomUsers: [],
});

const randomUsers = (
  state = fromJS([]),
  action,
) => {
  switch (action.type) {
    case RECEIVE_RANDOM_USERS:
      return state
        .concat(fromJS(action.randomUsers));
    default:
      return state;
  }
};

const homeReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case RECEIVE_RANDOM_USERS:
      return state
        .set(
          'randomUsers',
          randomUsers(state.get('randomUsers'), action)
        );
    default:
      return state;
  }
};

export default homeReducer;
